import { Loader2 } from 'lucide-react'

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <p className="mt-4 text-lg text-gray-400">Loading movies...</p>
    </div>
  )
}
