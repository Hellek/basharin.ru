import { ReactNode } from 'react'

export default function Tag({ className, children }: { className?: string, children: ReactNode | ReactNode[] }) {
  return (
    <div className={`text-xs px-1.5 py-0.5 rounded-md text-white ${className}`}>
      {children}
    </div>
  )
}
