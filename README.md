# 🎬 MovieSearch

A modern, responsive movie search application built with cutting-edge web technologies. Search and discover movies, TV series, and episodes with a beautiful, intuitive interface.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.9-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.14-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🔍 **Real-time Search** - Instant movie search with debounced API calls
- 📱 **Responsive Design** - Seamless experience across all devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS
- 🔄 **Smart Caching** - TanStack Query for efficient data management
- 🛡️ **Type-Safe** - Full TypeScript support for better code quality
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🎯 **Error Handling** - Graceful error states and loading indicators

## 🚀 Tech Stack

### Core
- **React 18.3** - Modern React with hooks and concurrent features
- **TypeScript 5.6** - Type-safe development
- **Vite 5.4** - Next-generation frontend tooling

### State & Data
- **TanStack Query** - Powerful asynchronous state management
- **React Hooks** - Custom hooks for reusable logic

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

### Code Quality
- **ESLint** - Code linting and best practices
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/MovieSearch.git
cd MovieSearch

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your OMDB API key to .env
# VITE_OMDB_API_KEY=your_api_key_here

# Start development server
npm run dev
```

## 🎮 Usage

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 🏗️ Project Structure

```
MovieSearch/
├── src/
│   ├── components/          # React components
│   │   ├── MovieCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── EmptyState.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useMovies.ts
│   ├── services/           # API services
│   │   └── api.ts
│   ├── types/              # TypeScript types
│   │   └── movie.ts
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Project dependencies
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_omdb_api_key
```

Get your free API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)

## 🎨 Key Features Explained

### TanStack Query Integration
- Automatic caching and background refetching
- Optimistic updates
- Built-in retry logic
- Query invalidation

### TypeScript Benefits
- Type-safe API responses
- Autocomplete and IntelliSense
- Compile-time error detection
- Better refactoring support

### Responsive Design
- Mobile-first approach
- Flexbox and CSS Grid layouts
- Tailwind's responsive utilities
- Optimized for all screen sizes

## 🧪 Best Practices

- **Component Architecture** - Modular, reusable components
- **Custom Hooks** - Extracted business logic
- **Error Boundaries** - Graceful error handling
- **Loading States** - Better user experience
- **Type Safety** - Full TypeScript coverage
- **Code Quality** - ESLint and Prettier configured
- **Performance** - Optimized builds with Vite

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ for learning modern web development

## 🙏 Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing the movie data
- [Vite](https://vitejs.dev/) for the amazing build tool
- [TanStack Query](https://tanstack.com/query) for powerful data fetching
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

⭐ Star this repo if you found it helpful!
