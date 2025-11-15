import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { SearchBar } from './components/SearchBar'
import { MovieCard } from './components/MovieCard'
import { LoadingSpinner } from './components/LoadingSpinner'
import { ErrorMessage } from './components/ErrorMessage'
import { EmptyState } from './components/EmptyState'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSearch, setActiveSearch] = useState('Batman')

  const { data, isLoading, error } = useMovies(activeSearch)

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setActiveSearch(searchTerm.trim())
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-primary via-orange-300 to-primary bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            MovieSearch
          </h1>
          <p className="mt-2 text-gray-400">
            Discover your favorite movies, series, and episodes
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
        </div>

        {/* Content */}
        <main>
          {isLoading && <LoadingSpinner />}

          {error && <ErrorMessage message={error.message} />}

          {!isLoading && !error && data?.Search && data.Search.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data.Search.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}

          {!isLoading && !error && (!data?.Search || data.Search.length === 0) && <EmptyState />}
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>Built with React, TypeScript, Vite, TanStack Query & Tailwind CSS</p>
          <p className="mt-1">Data provided by OMDb API</p>
        </footer>
      </div>
    </div>
  )
}

export default App
