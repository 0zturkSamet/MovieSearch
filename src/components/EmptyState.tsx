import { Film } from 'lucide-react'

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Film className="h-16 w-16 text-gray-600" />
      <h2 className="mt-4 text-xl font-semibold text-gray-400">No movies found</h2>
      <p className="mt-2 text-gray-500">Try searching with different keywords</p>
    </div>
  )
}
