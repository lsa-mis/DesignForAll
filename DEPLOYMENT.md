# Deployment Guide for Design for All

This guide will help you deploy the Design for All application to GitHub Pages at `/designforall`.

## Prerequisites

- GitHub account (rayraycodes)
- Git installed locally
- Node.js and npm installed

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `designforall` (or your preferred name)
3. Description: "Design for All - Accessibility as a Design Superpower"
4. Set to **Public** (required for GitHub Pages free tier)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Initialize Git and Push Code

Run these commands in your terminal from the project directory:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Design for All"

# Add your GitHub repository as remote
git remote add origin https://github.com/rayraycodes/designforall.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: Deploy from a branch
   - **Branch**: `main` → `/ (root)`
4. Click **Save**

## Step 4: Enable GitHub Actions

1. In your repository, go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - **Read and write permissions**
   - Check **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

## Step 5: Trigger Deployment

The GitHub Actions workflow will automatically run when you push to `main`. To trigger it manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

## Step 6: Access Your Site

Once deployment completes (usually 2-3 minutes), your site will be available at:

**https://rayraycodes.github.io/designforall/**

## Troubleshooting

### Build fails
- Check the **Actions** tab for error details
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 404 errors on routes
- Ensure `vite.config.ts` has `base: '/designforall/'`
- Ensure `App.tsx` has `basename="/designforall"` in BrowserRouter

### Site not updating
- Clear browser cache
- Check GitHub Pages settings
- Verify workflow completed successfully in Actions tab

## Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then manually upload the dist folder to GitHub Pages
```

## Notes

- The workflow deploys automatically on every push to `main`
- GitHub Pages may take a few minutes to update after deployment
- The site is served from the `/designforall/` subdirectory

