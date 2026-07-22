#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# deploy.sh — Pull latest code, build, and restart PM2 on the VPS
# Run this on your VPS after pushing changes to GitHub.
# ─────────────────────────────────────────────────────────────────────────────
set -e

APP_DIR="/home/pycclub/public_html"
APP_NAME="pyc-club"

echo "=========================================="
echo "  PYC Club — VPS Deployment"
echo "=========================================="
echo ""

# Navigate to app directory
cd "$APP_DIR" || { echo "ERROR: App directory not found at $APP_DIR"; exit 1; }

# Step 1: Pull latest code
echo "→ Pulling latest code from GitHub..."
git pull origin main
echo ""

# Step 2: Install dependencies
echo "→ Installing dependencies..."
npm install
echo ""

# Step 3: Build production version
echo "→ Building production version..."
npm run build
echo ""

# Step 4: Restart PM2
echo "→ Restarting PM2 process..."
pm2 restart "$APP_NAME" || pm2 start ecosystem.config.cjs
echo ""

# Step 5: Save PM2 config
pm2 save

echo ""
echo "=========================================="
echo "  ✓ Deployment Complete!"
echo "=========================================="
echo ""
echo "Check status:  pm2 status"
echo "View logs:     pm2 logs $APP_NAME"
echo "Visit site:    https://yourdomain.com"
echo ""
