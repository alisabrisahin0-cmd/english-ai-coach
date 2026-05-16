# Next.js Task Dashboard

A minimal Next.js application with Tailwind CSS and TypeScript for task management and weekly tracking.

## Features

- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **App Router**: Latest Next.js routing with App Directory
- **Type-Safe**: Strict TypeScript configuration
- **Responsive Design**: Tailwind CSS for styling
- **Production Ready**: Optimized build and deployment setup

## Project Structure

```
nextjs-task-app/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Dashboard.tsx      # Main dashboard component
│   ├── TaskCard.tsx       # Task card component
│   └── WeeklyTracker.tsx  # Weekly tracking component
├── lib/                   # Utility functions
│   └── apiHelpers.ts      # API helper functions
├── public/                # Static files
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.mjs     # PostCSS configuration
├── next.config.mjs        # Next.js configuration
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd nextjs-task-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Building for Production

```bash
npm run build
npm start
```

The app will be ready at `http://localhost:3000`

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel automatically detects Next.js and configures build settings
   - Deploy!

### Environment Variables for Vercel

In Vercel project settings, add:
- `NEXT_PUBLIC_API_BASE_URL` = Your API endpoint
- `DATABASE_URL` (if applicable)

### Other Deployment Options

- **Docker**: Create a `Dockerfile` for containerized deployment
- **Self-hosted**: Run `npm run build && npm start`
- **Netlify**: Deploy as static export (configure `next.config.js`)

## TypeScript Configuration

- **Strict Mode**: Enabled for maximum type safety
- **Path Alias**: `@/*` resolves to root directory
- **ESLint**: Integrated with Next.js ESLint config

## Tailwind CSS

Customization in `tailwind.config.ts`:
- Extended colors: `primary`, `secondary`
- Configure breakpoints and themes as needed

## API Integration

Use `lib/apiHelpers.ts` for:
- API endpoint configuration
- Request/response handling
- Error management

Example:
```typescript
import { fetchTasks } from '@/lib/apiHelpers'

const tasks = await fetchTasks()
```

## Troubleshooting

### Build Errors
- Delete `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Port Already in Use
- Change port: `npm run dev -- -p 3001`

### TypeScript Errors
- Run `npm run build` to validate
- Check `tsconfig.json` for strict settings

## Performance Tips

- Use Next.js Image component for images
- Implement dynamic imports for code splitting
- Leverage React Suspense for async components
- Use environment variables for sensitive data

## License

MIT

## Support

For issues and questions, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
