import { ReactNode } from 'react'

const Card = ({ className, children }: { className?: string, children: ReactNode | ReactNode[] }) => (
  <div className={`px-4 py-3 rounded-xl bg-slate-300 dark:bg-gray-800 ${className}`}>
    {children}
  </div>
)

export default Card
