import { AlertCircle } from 'lucide-react'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <AlertCircle className="h-16 w-16 text-red-500" />
      <h2 className="mt-4 text-xl font-semibold text-gray-300">Oops! Something went wrong</h2>
      <p className="mt-2 text-gray-400">{message}</p>
    </div>
  )
}
