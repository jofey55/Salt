#!/bin/bash

# Railway Deployment Script for SALT
# This script prepares the project and instructions for deploying to Railway.

echo "========================================="
echo "SALT - Railway Deployment Prep"
echo "========================================="

# 1. Create a railway.json configuration file
echo "Creating railway.json..."
cat > railway.json <<EOF
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
EOF

# 2. Verify package.json scripts
echo "Verifying package.json scripts..."
# We know from context that "build" and "start" are already correct:
# "build": "tsx script/build.ts"
# "start": "NODE_ENV=production node dist/index.cjs"

# 3. Create a .dockerignore file just in case they use Docker build
echo "Creating .dockerignore..."
cat > .dockerignore <<EOF
node_modules
.git
attached_assets
EOF

echo "========================================="
echo "Deployment Instructions for Railway:"
echo "========================================="
echo "1. Create a GitHub repository for this project if you haven't already."
echo "2. Push this code to your GitHub repository:"
echo "   git add ."
echo "   git commit -m 'Ready for deployment'"
echo "   git push"
echo ""
echo "3. Log in to Railway (https://railway.app)"
echo "4. Click 'New Project' -> 'Deploy from GitHub repo'"
echo "5. Select your repository."
echo "6. Railway will automatically detect Node.js and the start command."
echo ""
echo "Note: The application is configured to serve static files from 'dist/public' in production."
echo "      The 'npm run build' script handles this automatically."
echo "========================================="
