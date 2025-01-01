import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from './Icons'

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="button"
      className={`flex cursor-pointer hover:text-blue-500 text-blue-600 ${className}`}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </div>
  )
}

export default ThemeSwitcher