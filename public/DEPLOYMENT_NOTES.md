# GitHub Pages Deployment Guide

## Quick Start for GitHub Pages

This portfolio is **ready to deploy** to GitHub Pages using GitHub Actions. Follow these steps:

### 1. Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/samyak-k-jain/<YOUR-REPO-NAME>.git

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/samyak-k-jain/<YOUR-REPO-NAME>`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save changes

### 3. Wait for Deployment

- Go to the **Actions** tab in your repository
- You'll see the "Deploy to GitHub Pages" workflow running
- Wait for it to complete (usually 2-3 minutes)
- Your site will be live at: `https://samyak-k-jain.github.io/`

### 4. Verify Deployment

Visit your live site and check:
- All sections load correctly
- Navigation works
- Dark mode toggle functions
- Resume download link works (after you add resume.pdf)
- Contact form displays correctly

## Important Configuration Details

### Base Path Configuration

**For User Page** (`username.github.io`):
- `vite.config.ts` → `base: '/'` ✅ (Already configured)
- No additional changes needed

**For Project Page** (`username.github.io/repo-name`):
If you're deploying to a repository like `portfolio` or any other project name:

1. Update `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/repo-name/' : '/',
```

2. Update all absolute URLs in:
   - `index.html` (og:image, twitter:image URLs)
   - `public/sitemap.xml` (all `<loc>` URLs)

### GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy-pages.yml`) is pre-configured and will:
1. Trigger on every push to `main` branch
2. Install dependencies
3. Build the production bundle
4. Deploy to GitHub Pages

You can also trigger it manually from the Actions tab.

## Customization After Deployment

### Add Your Resume

1. Create/export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. Commit and push:
```bash
git add public/resume.pdf
git commit -m "Add resume PDF"
git push
```

The workflow will automatically redeploy with your resume.

### Update Content

Edit these files to update your portfolio content:
- `src/data/resume.ts` - Personal info, experience, education
- `src/data/projects.ts` - Project details

Then commit and push - automatic deployment will handle the rest!

### Custom Domain (Optional)

To use a custom domain like `samyakjain.dev`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add CNAME file to `public/`:
```bash
echo "yourdomain.com" > public/CNAME
```
3. Configure DNS settings at your registrar:
   - Add CNAME record pointing to `samyak-k-jain.github.io`
4. Push changes and wait for DNS propagation (24-48 hours)

Detailed guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Troubleshooting

### Workflow Fails

Check the Actions tab for error details. Common issues:
- **Node version**: Workflow uses Node 20 (update if needed)
- **Build errors**: Run `npm run build` locally to debug
- **Permissions**: Ensure repository has Pages permission enabled

### Site Not Updating

1. Check workflow status in Actions tab
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Wait 2-3 minutes for CDN to update
4. Check if commit triggered the workflow

### 404 Errors

If you see 404 on deployment:
1. Verify Pages source is set to "GitHub Actions"
2. Check `vite.config.ts` base path is correct
3. Ensure workflow completed successfully

### Dark Mode Not Persisting

This is a localStorage feature that works client-side. Ensure JavaScript is enabled in browser.

## Alternative Deployment: gh-pages Package

If you prefer not to use GitHub Actions:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy manually:
```bash
npm run deploy
```

4. Set Pages source to `gh-pages` branch in Settings

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting with React.lazy()
- ✅ Minified production build
- ✅ Tree-shaking with Vite
- ✅ Optimized CSS with Tailwind
- ✅ Smooth animations with CSS

For further optimization:
- Compress images before adding
- Use WebP format for images
- Add image lazy loading where needed

## SEO Notes

Already configured:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Accessible navigation

To improve SEO further:
- Add Google Analytics
- Submit sitemap to Google Search Console
- Generate og:image for social previews
- Add structured data (JSON-LD)

## Monitoring & Analytics

To add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Support

For issues or questions:
- Check README.md for detailed documentation
- Review GitHub Actions logs in Actions tab
- Open an issue in the repository

Happy deploying! 🚀
