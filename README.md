# Samyak Jain - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, technical skills, projects, and contact information with a clean, developer-focused aesthetic.

## 🚀 Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with preference persistence
- **Accessible**: WCAG AA compliant with semantic HTML and ARIA attributes
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Performance**: Optimized images, animations, and code splitting
- **Interactive UI**: Smooth scrolling, hover effects, and modal dialogs
- **Project Showcase**: Detailed project cards with code snippets and live demos
- **Contact Form**: Form validation with mailto integration

## 📋 Sections

1. **Hero** - Professional introduction with profile photo and social links
2. **About** - Professional summary and key highlights
3. **Skills** - Technical skills organized by category (Backend, Frontend, DevOps, Tools)
4. **Projects** - Featured projects with detailed modal views and code samples
5. **Experience** - Professional work history with achievements
6. **Education** - Academic background and certifications
7. **Contact** - Contact form and social media links
8. **Footer** - Quick links and additional information

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **Forms**: React Hook Form
- **State**: React Query

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:8080
   ```

## 🔧 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

#### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or connect your GitHub repository directly on [vercel.com](https://vercel.com)

#### Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## ✏️ Customization Guide

### Personal Information

**Update these files with your information:**

1. **src/components/Hero.tsx**
   - Line 21-27: Name, title, tagline
   - Line 37-44: Social media links (GitHub, LinkedIn, Email)

2. **src/components/About.tsx**
   - Line 14-30: Professional summary and highlights

3. **src/components/Skills.tsx**
   - Line 14-52: Update skill categories and technologies

4. **src/components/Projects.tsx**
   - Line 32-117: Update project details, descriptions, tech stack, and links

5. **src/components/Experience.tsx**
   - Line 14-52: Update work experience, companies, and achievements

6. **src/components/Education.tsx**
   - Line 13-21: Update education details
   - Line 23-43: Update certifications

7. **src/components/Contact.tsx**
   - Line 47: Update email address
   - Line 115: Update email address
   - Line 129: Update phone number
   - Line 144: Update LinkedIn URL
   - Line 160: Update GitHub URL

8. **src/components/Footer.tsx**
   - Line 24-26: Update footer description
   - Line 54-77: Update social media links

9. **src/pages/Index.tsx**
   - Line 20-38: Update SEO meta information and structured data

### Images

**Replace placeholder images:**

All images are located in `src/assets/`:
- `profile-photo.jpg` - Your professional headshot (512x512px recommended)
- `hero-bg.jpg` - Hero background image (1920x1080px)
- `project-1.jpg`, `project-2.jpg`, `project-3.jpg` - Project screenshots (800x600px)

To replace:
1. Add your images to `src/assets/`
2. Update import paths in respective component files
3. Ensure images are optimized for web (use WebP format for best results)

### Resume Download

To add a downloadable resume:
1. Add `resume.pdf` to the `public` folder
2. Add a download button in `src/components/Hero.tsx` or `src/components/About.tsx`:

```tsx
<Button asChild variant="outline">
  <a href="/resume.pdf" download>
    Download Resume
  </a>
</Button>
```

### Theme Colors

Update colors in `src/index.css` (lines 11-90):
- `--primary`: Main brand color
- `--accent`: CTA and highlight color
- Adjust both light and dark mode values

### Content Guidelines

- **Name & Title**: Keep concise and professional
- **Bio**: 2-3 sentences maximum
- **Projects**: Include 3-6 of your best projects
- **Experience**: List most recent positions (3-5)
- **Skills**: Group by category, list most proficient first
- **Contact**: Ensure all links and emails are correct

## 🧪 Testing Checklist

Before deploying, verify:

- [ ] All personal information is updated
- [ ] Images are replaced and optimized
- [ ] Social media links are correct and functional
- [ ] Contact form opens email client properly
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Light and dark modes both display correctly
- [ ] All navigation links scroll smoothly
- [ ] No console errors in browser DevTools
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

## 📊 Performance Optimization

- Images use modern formats (WebP with fallbacks)
- Code splitting with lazy loading
- CSS animations use GPU acceleration
- Fonts use system font stack for performance
- Production build is minified and tree-shaken

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- Sufficient color contrast (WCAG AA)
- Focus indicators on interactive elements
- Alt text on all images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: your-email@example.com
- **LinkedIn**: [linkedin.com/in/samyak-jain-2550831a8](https://www.linkedin.com/in/samyak-jain-2550831a8/)
- **GitHub**: [github.com/your-username](https://github.com/your-username)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
