Add-Type -AssemblyName System.Runtime.WindowsRuntime
Add-Type -AssemblyName System.IO.WindowsRuntime
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null

function Await-Op($op) {
    return [System.WindowsRuntimeSystemExtensions]::AsTask($op).GetAwaiter().GetResult()
}

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()

function Ocr-File($rel) {
    $path = (Resolve-Path $rel).Path
    $file = Await-Op([Windows.Storage.StorageFile]::GetFileFromPathAsync($path))
    $stream = Await-Op($file.OpenAsync([Windows.Storage.FileAccessMode]::Read))
    $decoder = Await-Op([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream))
    $bitmap = Await-Op($decoder.GetSoftwareBitmapAsync())
    $res = Await-Op($engine.RecognizeAsync($bitmap))
    Write-Host "=== $rel ==="
    foreach ($line in $res.Lines) {
        $words = ($line.Words | ForEach-Object { $_.Text }) -join " "
        $x = ($line.Words | Measure-Object -Property { $_.BoundingRect.X } -Minimum).Minimum
        $y = ($line.Words | Measure-Object -Property { $_.BoundingRect.Y } -Minimum).Minimum
        $w = ($line.Words | Measure-Object -Property { $_.BoundingRect.Width } -Sum).Sum
        $h = ($line.Words | Measure-Object -Property { $_.BoundingRect.Height } -Maximum).Maximum
        Write-Host ("  [x={0,3}, y={1,4}, w={2,3}, h={3,2}] : {4}" -f [int]$x, [int]$y, [int]$w, [int]$h, $words)
    }
}

Ocr-File "scratch/synced_frames/frame_002.png"
Ocr-File "scratch/synced_frames/frame_007.png"
Ocr-File "scratch/synced_frames/frame_012.png"
Ocr-File "scratch/synced_frames/frame_018.png"
Ocr-File "scratch/synced_frames/frame_026.png"
Ocr-File "scratch/synced_frames/frame_032.png"
