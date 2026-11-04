$procs = [System.Diagnostics.Process]::GetProcesses()
foreach ($p in $procs) {
    Write-Output "$($p.Id) $($p.ProcessName)"
}
