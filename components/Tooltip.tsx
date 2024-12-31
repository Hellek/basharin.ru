'use client'

import { createRef, ReactNode } from 'react'

export function Tooltip({ children, title }: { children: ReactNode, title: string }) {
  const tipRef = createRef<HTMLDivElement>()

  const handleMouseEnter = () => {
    if (!tipRef.current) return

    tipRef.current.style.opacity = '1'
    tipRef.current.style.marginLeft = '20px'
  }

  const handleMouseLeave = () => {
    if (!tipRef.current) return

    tipRef.current.style.opacity = '0'
    tipRef.current.style.marginLeft = '10px'
  }

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute whitespace-no-wrap bg-gradient-to-r from-black-neue to-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150"
        style={{ left: '100%', opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-black-neuefrom-black-neue h-3 w-3 absolute"
          style={{ left: '-6px', transform: 'rotate(45deg)' }}
        />
        {title}
      </div>
      {children}
    </div>
  )
}