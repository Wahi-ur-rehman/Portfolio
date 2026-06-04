# Portfolio Website - Wahi Ur Rehman

A modern, feature-rich portfolio website showcasing AI engineering and full-stack development expertise. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1200)

## ✨ Features

### 🎨 Design & UX
- **Smooth Animations**: Powered by Framer Motion for fluid page transitions
- **Smooth Scrolling**: Native smooth scroll behavior with section navigation
- **Interactive Canvas**: Dynamic particle systems with WebGL rendering
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Modern dark gradient design with glassmorphism effects
- **Parallax Effects**: Depth and dimension through parallax scrolling

### 🚀 Performance
- **Lazy Loading**: Images load on-demand for optimal performance
- **Code Splitting**: Component-level code splitting
- **Optimized Animations**: GPU-accelerated transforms
- **Intersection Observer**: Efficient viewport detection
- **Custom Hooks**: Reusable performance-optimized hooks

### 🔒 Security Features
- **Content Security Policy**: Strict CSP headers
- **Input Sanitization**: All user inputs are sanitized
- **Email Validation**: Robust email format validation
- **XSS Protection**: Multiple layers of XSS prevention
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **No External Scripts**: Self-contained, no 3rd party tracking
- See [SECURITY.md](./SECURITY.md) for complete security documentation

### 🎭 Interactive Elements
- **Hover Effects**: Dynamic hover states on all interactive elements
- **3D Elements**: Canvas-based particle systems and animations
- **Scroll Progress**: Visual scroll progress indicator
- **Toast Notifications**: User feedback with Sonner
- **Gradient Animations**: Animated gradient backgrounds
- **Icon Animations**: Lucide React icons with motion effects

### 📱 Sections
1. **Hero**: Eye-catching hero section with animated background
2. **About**: Professional background and expertise
3. **Projects**: Featured projects with live demos and GitHub links
4. **Skills**: Comprehensive tech stack visualization
5. **Contact**: Interactive contact form with validation

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animation library

### Key Libraries
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **React Intersection Observer** - Viewport detection
- **Three.js / R3F** - 3D graphics (installed)
- **Lottie React** - Animation support (installed)

### Development
- **pnpm** - Fast, efficient package manager
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎯 Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main app component
│   └── components/          # React components
│       ├── Hero.tsx         # Hero section with canvas animation
│       ├── About.tsx        # About section
│       ├── Projects.tsx     # Projects showcase
│       ├── Skills.tsx       # Skills visualization
│       ├── Contact.tsx      # Contact form
│       ├── Navigation.tsx   # Navigation bar
│       ├── FloatingParticles.tsx  # Background particles
│       ├── ScrollProgress.tsx     # Scroll indicator
│       ├── ParallaxSection.tsx    # Parallax container
│       └── ImageWithFallback.tsx  # Optimized image component
├── hooks/                   # Custom React hooks
│   ├── useMousePosition.ts
│   └── useIntersectionObserver.ts
├── security/                # Security configuration
│   └── csp.ts              # Content Security Policy
├── styles/                  # Global styles
│   ├── globals.css         # Global CSS with scrollbar styles
│   ├── theme.css           # Theme tokens
│   ├── tailwind.css        # Tailwind imports
│   └── fonts.css           # Font imports
└── utils/                   # Utility functions
    └── sanitize.ts         # Input sanitization
```

## 🎨 Design Features

### Color Palette
- **Primary**: Blue (#3B82F6) to Purple (#9333EA) gradients
- **Secondary**: Purple (#A855F7) to Pink (#EC4899) gradients
- **Background**: Gray-950 to Black with subtle gradients
- **Accents**: Cyan, Emerald, Orange, Indigo

### Typography
- Modern sans-serif font stack
- Responsive font sizes
- Gradient text effects
- Custom font weights

### Effects
- Glassmorphism (backdrop-blur)
- Gradient backgrounds
- Box shadows with color
- Border gradients
- Pulse animations
- Scale transforms
- Smooth transitions

## 🔐 Security Best Practices

1. **Input Validation**: All form inputs are validated and sanitized
2. **CSP Headers**: Strict content security policy
3. **HTTPS Only**: Enforced secure connections
4. **No Inline Scripts**: All scripts are external
5. **Secure Dependencies**: Regular security audits
6. **XSS Prevention**: Multiple layers of protection

## 📊 Performance Optimizations

1. **Lazy Loading**: Images load on-demand
2. **Code Splitting**: Dynamic imports for components
3. **Debouncing**: Scroll and resize event handlers
4. **GPU Acceleration**: Transform-based animations
5. **Efficient Re-renders**: Memoization and optimization
6. **Optimized Assets**: Compressed images from Unsplash

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👨‍💻 Author

**Wahi Ur Rehman**
- GitHub: [@Wahi-ur-rehman](https://github.com/Wahi-ur-rehman)
- LinkedIn: [wahi-ur-rehman](https://www.linkedin.com/in/wahi-ur-rehman/)
- Portfolio: [ai-portfolio-seven-liart.vercel.app](https://ai-portfolio-seven-liart.vercel.app/)
- Location: Rawalpindi, Pakistan
- Status: Open to remote opportunities worldwide

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Figma Make](https://www.figma.com/make)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For opportunities or collaborations, reach out via:
- LinkedIn: https://www.linkedin.com/in/wahi-ur-rehman/
- GitHub: https://github.com/Wahi-ur-rehman

---

Made with ❤️ by Wahi Ur Rehman using React, TypeScript & Tailwind CSS
