import { MovieSearchResponse } from '../types/movie'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const API_URL = 'https://www.omdbapi.com'

export const searchMovies = async (searchTerm: string): Promise<MovieSearchResponse> => {
  if (!API_KEY) {
    throw new Error('API key is not configured')
  }

  const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${searchTerm}`)

  if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data: MovieSearchResponse = await response.json()

  if (data.Response === 'False') {
    throw new Error(data.Error || 'No movies found')
  }

  return data
}
