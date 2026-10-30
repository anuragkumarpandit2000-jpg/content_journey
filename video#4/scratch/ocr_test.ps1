[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime] | Out-Null
[Windows.Globalization.Language, Windows.Globalization, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()

function Get-OcrLines($relPath) {
    $fullPath = (Resolve-Path $relPath).Path
    $fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath)
    $file = $fileOp.AsTask().GetAwaiter().GetResult()
    
    $streamOp = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    $stream = $streamOp.AsTask().GetAwaiter().GetResult()
    
    $decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    $decoder = $decoderOp.AsTask().GetAwaiter().GetResult()
    
    $bitmapOp = $decoder.GetSoftwareBitmapAsync()
    $bitmap = $bitmapOp.AsTask().GetAwaiter().GetResult()
    
    $ocrOp = $engine.RecognizeAsync($bitmap)
    $ocrResult = $ocrOp.AsTask().GetAwaiter().GetResult()
    
    foreach ($line in $ocrResult.Lines) {
        $words = ($line.Words | ForEach-Object { $_.Text }) -join ' '
        $minX = ($line.Words | Measure-Object -Property { $_.BoundingRect.X } -Minimum).Minimum
        $minY = ($line.Words | Measure-Object -Property { $_.BoundingRect.Y } -Minimum).Minimum
        $maxX = ($line.Words | Measure-Object -Property { $_.BoundingRect.X + $_.BoundingRect.Width } -Maximum).Maximum
        $maxY = ($line.Words | Measure-Object -Property { $_.BoundingRect.Y + $_.BoundingRect.Height } -Maximum).Maximum
        Write-Host ('Line: "{0}" | [x={1}, y={2}, w={3}, h={4}]' -f $words, [int]$minX, [int]$minY, [int]($maxX - $minX), [int]($maxY - $minY))
    }
}

Write-Host "=== Step 1 (frame_002.png) ==="
Get-OcrLines "scratch/synced_frames/frame_002.png"

Write-Host "`n=== Step 2 (frame_007.png) ==="
Get-OcrLines "scratch/synced_frames/frame_007.png"

Write-Host "`n=== Step 3 (frame_012.png) ==="
Get-OcrLines "scratch/synced_frames/frame_012.png"

Write-Host "`n=== Step 4 (frame_018.png) ==="
Get-OcrLines "scratch/synced_frames/frame_018.png"

Write-Host "`n=== Step 5 (frame_026.png) ==="
Get-OcrLines "scratch/synced_frames/frame_026.png"

Write-Host "`n=== Step 6 (frame_032.png) ==="
Get-OcrLines "scratch/synced_frames/frame_032.png"
