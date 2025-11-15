import { Movie } from '../types/movie'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { imdbID, Title, Year, Type, Poster } = movie

  return (
    <div
      key={imdbID}
      className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Year Badge */}
      <div className="absolute left-0 top-0 z-10 bg-primary/90 px-4 py-2 text-sm font-semibold text-gray-900 opacity-0 transition-opacity group-hover:opacity-100">
        {Year}
      </div>

      {/* Movie Poster */}
      <div className="aspect-[2/3] w-full">
        <img
          src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400x600?text=No+Image'}
          alt={Title}
          className="h-full w-full object-cover transition-opacity group-hover:opacity-30"
        />
      </div>

      {/* Movie Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent p-6 transition-all group-hover:bg-transparent">
        <span className="text-xs font-medium uppercase tracking-wider text-gray-300">
          {Type}
        </span>
        <h3 className="mt-1 text-lg font-bold text-primary line-clamp-2">{Title}</h3>
      </div>
    </div>
  )
}
