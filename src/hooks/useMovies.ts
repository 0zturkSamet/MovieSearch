import { useQuery } from '@tanstack/react-query'
import { searchMovies } from '../services/api'

export const useMovies = (searchTerm: string) => {
  return useQuery({
    queryKey: ['movies', searchTerm],
    queryFn: () => searchMovies(searchTerm),
    enabled: searchTerm.length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
