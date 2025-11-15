export interface Movie {
  imdbID: string
  Title: string
  Year: string
  Type: string
  Poster: string
}

export interface MovieSearchResponse {
  Search?: Movie[]
  totalResults?: string
  Response: string
  Error?: string
}
