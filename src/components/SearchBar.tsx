import { Search } from 'lucide-react'
import { FormEvent } from 'react'

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  onSearch: () => void
}

export const SearchBar = ({ searchTerm, setSearchTerm, onSearch }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-3xl items-center gap-3 rounded-full bg-gray-800 px-6 py-4 shadow-xl transition-all hover:shadow-2xl"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies, series, episodes..."
        className="flex-1 bg-transparent text-lg text-gray-100 placeholder-gray-400 outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-primary p-3 text-gray-900 transition-transform hover:scale-110 hover:bg-primary/90"
        aria-label="Search"
      >
        <Search size={24} />
      </button>
    </form>
  )
}
