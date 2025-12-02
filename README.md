# Samyak Jain - Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Features smooth animations, dark mode support, and full GitHub Pages deployment.

🌐 **Live Demo**: [https://samyak-k-jain.github.io/](https://samyak-k-jain.github.io/)

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Animations**: CSS animations with intersection observers
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## ✨ Features

- ⚡ Lightning-fast performance with Vite
- 📱 Fully responsive design (mobile-first)
- 🌓 Dark mode toggle with localStorage persistence
- 🎨 Modern gradient design with smooth animations
- ♿ Accessible HTML with semantic tags and ARIA labels
- 🔍 SEO optimized with meta tags and sitemap
- 📊 Intersection Observer for scroll animations
- 💼 Project showcase with modal details
- 📝 Contact form ready for integration
- 🚀 GitHub Pages deployment with GitHub Actions

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # GitHub Actions deployment workflow
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # Robots file
│   ├── sitemap.xml            # SEO sitemap
│   └── resume.pdf             # Resume PDF (add your own)
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Skills.tsx         # Technical skills
│   │   ├── Education.tsx      # Education & achievements
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer
│   ├── data/
│   │   ├── resume.ts          # Resume data (edit here!)
│   │   └── projects.ts        # Projects data (edit here!)
│   ├── pages/
│   │   ├── Index.tsx          # Main page
│   │   └── NotFound.tsx       # 404 page
│   ├── App.tsx                # App component
│   ├── index.css              # Global styles & design system
│   └── main.tsx               # Entry point
├── index.html                 # HTML template with SEO meta tags
├── tailwind.config.ts         # Tailwind configuration
├── vite.config.ts             # Vite configuration
└── package.json               # Dependencies & scripts
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/samyak-k-jain/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `src/data/resume.ts` to update:
- Contact information (name, email, phone, LinkedIn, GitHub)
- About section text
- Work experience
- Education details
- Skills
- Achievements

### 2. Update Projects

Edit `src/data/projects.ts` to add/modify projects:
```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description",
  longDescription: "Detailed description",
  technologies: ["React", "TypeScript"],
  highlights: ["Key feature 1", "Key feature 2"],
  github: "https://github.com/...",
  demo: "https://demo-url.com",
  category: "professional" | "personal" | "academic"
}
```

### 3. Customize Design

**Colors**: Edit `src/index.css` CSS variables:
```css
:root {
  --primary: 193 95% 48%;        /* Main brand color */
  --accent: 210 100% 55%;        /* Secondary accent */
  --background: 0 0% 100%;       /* Background color */
  /* ... more colors */
}
```

**Fonts**: Change in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

### 4. Add Resume PDF

Place your resume PDF in `public/resume.pdf`. The download buttons throughout the site will use this file.

### 5. Add Social Preview Image

Create an Open Graph image (1200x630px) and save as `public/og-image.png` for social media previews.

## 🚀 Deployment to GitHub Pages

### Method 1: GitHub Actions (Recommended) ✅

**This method is already set up and will deploy automatically on push!**

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", set:
     - **Source**: GitHub Actions
   - Save changes

3. **Automatic Deployment**:
   - The `.github/workflows/deploy-pages.yml` workflow will run automatically
   - Check the "Actions" tab to see deployment progress
   - Once complete, your site will be live at `https://username.github.io/`

### Method 2: Manual gh-pages Branch

If you prefer manual deployment:

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json** (if using a project page):
```json
{
  "homepage": "https://samyak-k-jain.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Set source to `gh-pages` branch
   - Save

### Important Notes for Deployment

- **User Page** (`username.github.io`): Use base path `/` (already set)
- **Project Page** (`username.github.io/repo-name`): 
  - Update `vite.config.ts`: `base: '/repo-name/'`
  - Update all URLs in `sitemap.xml` and `index.html`

## 📱 Progressive Web App (PWA)

The site includes a basic PWA manifest (`public/manifest.json`). To enable full PWA features:

1. Install Vite PWA plugin:
```bash
npm install vite-plugin-pwa -D
```

2. Configure in `vite.config.ts` (refer to [vite-plugin-pwa docs](https://vite-pwa-org.netlify.app/))

## 🧪 Testing

Currently, the project includes basic TypeScript type checking and ESLint. To add comprehensive testing:

```bash
# Install testing dependencies
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

# Add test script to package.json
"test": "vitest"

# Run tests
npm test
```

## 🔧 Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Updating

1. Check Actions tab for workflow status
2. Ensure Pages is enabled in repository settings
3. Clear browser cache (Ctrl+Shift+R)
4. Wait 2-3 minutes for CDN propagation

### 404 on Page Refresh

This is normal for client-side routing on GitHub Pages. The app uses hash-based routing which works correctly.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/samyak-k-jain/portfolio/issues).

## 📧 Contact

**Samyak Jain**
- Email: samyakjain7860@gmail.com
- LinkedIn: [linkedin.com/in/samyak-jain-2550831a8](https://www.linkedin.com/in/samyak-jain-2550831a8/)
- GitHub: [github.com/samyak-k-jain](https://github.com/samyak-k-jain)

---

⭐ If you like this project, please give it a star on GitHub!

Built with ❤️ using React + TypeScript + Vite
