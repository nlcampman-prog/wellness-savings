#!/bin/bash
# Wellness Savings — Deployment Script
# Usage: ./deploy.sh
# Builds the Astro site to dist/ for static hosting.

set -e
echo "🌿 Wellness Savings — Build & Deploy"
echo "===================================="
cd "$(dirname "$0")"
echo "📦 Installing dependencies..."
npm install --silent
echo "🏗️  Building site..."
npm run build
echo ""
echo "✅ Build complete! Site output: $(pwd)/dist/"
echo "📤 Ready to deploy from dist/ to your static host."
echo ""
echo "   Deployment targets:"
echo "   - Netlify:  npx netlify deploy --prod --dir=dist"
echo "   - Vercel:   npx vercel --prod dist/"
echo "   - Preview:  npx http-server dist/ --port 3000 --host 0.0.0.0"