import { useEvent, useStore } from 'effector-react'

import { $theme, toggleThemeEvent } from '@models/app'
import { MoonIcon, SunIcon } from './Icons'

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const toggleTheme = useEvent(toggleThemeEvent)
  const theme = useStore($theme)

  return (
    <div
      role="button"
      className={`flex cursor-pointer hover:text-blue-500 text-blue-600 ${className}`}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </div>
  )
}
