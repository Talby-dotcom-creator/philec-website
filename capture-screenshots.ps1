$ErrorActionPreference = "Stop"

$edgeCandidates = @(
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\147.0.3912.98\msedge.exe"
)

$edge = $edgeCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) {
  throw "Microsoft Edge was not found. Install Edge or update this script with your browser path."
}

$out = Join-Path $PSScriptRoot "screenshots"
New-Item -ItemType Directory -Force -Path $out | Out-Null

$base = "http://127.0.0.1:5173/"
$shots = @(
  @{ Name = "desktop-hero.png"; Size = "1440,900"; Url = $base },
  @{ Name = "mobile-hero.png"; Size = "390,844"; Url = $base },
  @{ Name = "services-section.png"; Size = "1440,1000"; Url = "$base#services" },
  @{ Name = "contact-section.png"; Size = "1440,1000"; Url = "$base#contact" }
)

foreach ($shot in $shots) {
  $file = Join-Path $out $shot.Name
  if (Test-Path $file) {
    Remove-Item -LiteralPath $file -Force
  }

  & $edge `
    --headless=new `
    --disable-gpu `
    --no-first-run `
    --no-default-browser-check `
    --hide-scrollbars `
    --window-size=$($shot.Size) `
    --screenshot="$file" `
    $shot.Url | Out-Null

  Write-Host "Saved $file"
}
