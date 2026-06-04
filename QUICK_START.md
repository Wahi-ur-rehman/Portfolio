# Quick Start Guide 🚀

Get your portfolio website running in minutes!

## Prerequisites

- Node.js 18+ installed
- pnpm installed (or npm/yarn)
- Git installed

## Installation

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Start Development Server
```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

## Project Commands

```bash
# Development
pnpm dev          # Start dev server with hot reload

# Production
pnpm build        # Build for production
pnpm preview      # Preview production build locally

# Maintenance
pnpm audit        # Check for security vulnerabilities
```

## Customization Guide

### 1. Update Personal Information

**Hero Section** (`src/app/components/Hero.tsx`)
- Line 41: Your name
- Line 47: Your title
- Line 53: Your tagline
- Lines 59-89: Social media links

**About Section** (`src/app/components/About.tsx`)
- Line 66: Your location
- Line 72: Your expertise
- Line 78: Your mission
- Line 84: Your bio

**Contact Section** (`src/app/components/Contact.tsx`)
- Lines 88-139: Your contact information
- Update email, LinkedIn, GitHub URLs

### 2. Update Projects

Edit `src/app/components/Projects.tsx`:
- Lines 7-57: Project array
- Update titles, descriptions, tech stacks, and links

### 3. Update Skills

Edit `src/app/components/Skills.tsx`:
- Lines 6-71: Skill categories array
- Add/remove skills and adjust levels

### 4. Change Colors

Edit `src/styles/theme.css` or use Tailwind classes:
- Primary: Blue (from-blue-400 to-blue-600)
- Secondary: Purple (from-purple-400 to-purple-600)
- Accent: Pink (from-pink-400 to-pink-600)

### 5. Update Images

Replace image URLs in:
- `About.tsx` - Line 66
- `Projects.tsx` - Lines 22-56 (project images)

Or use the Unsplash search integration.

### 6. Add Environment Variables

Create `.env.local`:
```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GA_TRACKING_ID=your-tracking-id
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Follow the prompts
4. Your site is live! 🎉

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
pnpm build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
pnpm add -D gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "pnpm build && gh-pages -d dist"
}
```

3. Deploy:
```bash
pnpm deploy
```

## Troubleshooting

### Issue: Dependencies not installing
**Solution**: 
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Issue: Port 5173 already in use
**Solution**:
```bash
# Use different port
pnpm dev --port 3000
```

### Issue: Build fails
**Solution**:
```bash
# Clear cache and rebuild
rm -rf dist node_modules/.vite
pnpm build
```

### Issue: Images not loading
**Solution**:
- Check image URLs are valid
- Verify internet connection
- Check browser console for errors

## Performance Tips

1. **Optimize Images**: Use compressed images (WebP format)
2. **Lazy Load**: Images already lazy load
3. **Code Split**: Components already optimized
4. **CDN**: Use Vercel/Netlify CDN for static assets

## Security Checklist

- [x] Update `.env.local` with your values
- [x] Don't commit `.env.local` to Git
- [x] Use HTTPS in production
- [x] Keep dependencies updated: `pnpm update`
- [x] Run security audit: `pnpm audit`

## Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile devices

## Support

Having issues? Check:
1. [README.md](./README.md) - Full documentation
2. [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guide
3. [SECURITY.md](./SECURITY.md) - Security practices
4. GitHub Issues - Report bugs

## Next Steps

1. ✅ Customize content with your information
2. ✅ Update project images and links
3. ✅ Test on multiple devices
4. ✅ Deploy to production
5. ✅ Share your amazing portfolio! 🎉

---

**Need help?** Open an issue on GitHub!

Built with ❤️ using React + TypeScript + Tailwind CSS
