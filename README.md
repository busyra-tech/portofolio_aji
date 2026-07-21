# Aji Dwi Saputra - Personal Portfolio Website

A modern, responsive portfolio website showcasing software engineering experience, projects, and skills. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript 5, Tailwind CSS 3
- **Dark Mode**: Seamless dark/light theme switching
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Meta tags, OG tags, and structured data
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Server-side rendering, optimized build
- **Type Safe**: Strict TypeScript configuration
- **Environment Variables**: Secure configuration management

## 📋 Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone or Download the Repository

```bash
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create `.env.local` file and edit with your information:

```env
NEXT_PUBLIC_AUTHOR_NAME=Your Name
NEXT_PUBLIC_AUTHOR_EMAIL=your.email@example.com
NEXT_PUBLIC_AUTHOR_PHONE=+1 234 567 8900
NEXT_PUBLIC_AUTHOR_LOCATION=City, Country
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourprofile
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
```

### 4. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── components/           # Reusable React components
├── config/              # Application configuration
├── lib/                 # Utility functions
├── src/
│   ├── pages/          # Next.js pages/routes
│   ├── styles/         # Global CSS
│   └── api/            # API routes
├── public/             # Static assets
├── data.ts             # Portfolio data
├── types.ts            # TypeScript definitions
└── package.json        # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `config/site.ts` and `.env.local`:

```typescript
// config/site.ts
export const siteConfig = {
  author: {
    name: "Your Name",
    email: "your.email@example.com",
    location: "Your Location",
  },
};
```

### Add Projects

Edit `data.ts` to add new projects to the portfolio.

### Update Skills

Modify the `languages` and `infra` arrays in `data.ts`.

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

## 📱 Pages

- **Home** (`/`) - About page with services
- **Projects** (`/projects`) - Portfolio projects with filtering
- **Skills** (`/skills`) - Technical skills with proficiency levels
- **Experience** (`/experience`) - Work experience timeline
- **Education** (`/education`) - Educational background and certifications

## 🔧 Available Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run linting checks
npm run type-check    # Check TypeScript types
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy!

### Other Platforms

See [IMPROVEMENTS_GUIDE.md](./IMPROVEMENTS_GUIDE.md) for detailed deployment instructions.

## 📚 Documentation

- [REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md) - Detailed refactoring changes
- [IMPROVEMENTS_GUIDE.md](./IMPROVEMENTS_GUIDE.md) - Customization and deployment guide
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎯 Best Practices

- Keep `data.ts` updated with latest information
- Optimize images before adding
- Test on mobile devices
- Check SEO with Lighthouse
- Monitor performance metrics
- Keep dependencies updated

## 🔒 Security

- Never commit `.env.local` file
- Use environment variables for sensitive data
- Keep dependencies updated
- Run `npm audit` regularly

## 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Cache issues:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org) - React Framework
- [Tailwind CSS](https://tailwindcss.com) - CSS Framework
- [React Icons](https://react-icons.github.io) - Icon Library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme Management

---

**Happy Coding! 🎉**

For more information, check out the [project documentation](./IMPROVEMENTS_GUIDE.md).
