#!/bin/bash

# Setup script for GitHub deployment
# Run this script after creating your GitHub repository

echo "🚀 Setting up Design for All for GitHub Pages deployment..."
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Check if remote exists
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' already exists."
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub repository URL: " repo_url
        git remote set-url origin "$repo_url"
    fi
else
    read -p "Enter your GitHub repository URL (e.g., https://github.com/rayraycodes/designforall.git): " repo_url
    git remote add origin "$repo_url"
fi

echo ""
echo "✅ Configuration complete!"
echo ""
echo "Next steps:"
echo "1. Add and commit your files:"
echo "   git add ."
echo "   git commit -m 'Initial commit: Design for All'"
echo ""
echo "2. Push to GitHub:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages in repository Settings → Pages"
echo "4. Enable GitHub Actions in repository Settings → Actions → General"
echo ""
echo "See DEPLOYMENT.md for detailed instructions."

