# Deployment Guide for Design for All

This guide will help you deploy the Design for All application to GitHub Pages at `/designforall`.

## Prerequisites

- GitHub account with access to `lsa-mis` organization
- Git installed locally
- Node.js and npm installed

## Step 1: Repository Setup

The repository is already set up at: `git@github.com:lsa-mis/DesignForAll.git`

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/lsa-mis/DesignForAll
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. Click **Save**

## Step 3: Enable GitHub Actions Permissions

1. In your repository, go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - **Read and write permissions**
   - Check **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

## Step 4: Trigger Deployment

The GitHub Actions workflow will automatically run when you push to `main`. To trigger it manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

## Step 5: Access Your Site

Once deployment completes (usually 2-3 minutes), your site will be available at:

**https://lsa-mis.github.io/DesignForAll/designforall/**

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

