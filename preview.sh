#!/usr/bin/env bash
# Buduje witrynę dokładnie tak jak deploy.yml i serwuje ją lokalnie.
set -euo pipefail
cd "$(dirname "$0")"
(cd cli-workshop/website && [ -d node_modules ] || npm ci) && (cd cli-workshop/website && npm run build)
rm -rf _site
mkdir -p _site/mona-mayhem _site/cli-workshop _site/decks
cp -R site/. _site/
cp -R mona-mayhem/. _site/mona-mayhem/
cp -R cli-workshop/website/dist/. _site/cli-workshop/
cp decks/*.pptx _site/decks/ 2>/dev/null || true
touch _site/.nojekyll
echo "→ http://localhost:${1:-8080}/"
python3 -m http.server "${1:-8080}" --directory _site
