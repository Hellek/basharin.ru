import { useState } from 'react'

enum Lang {
  RU = 'RU',
  EN = 'EN',
}

export const LangSwitcher = ({ className }: { className?: string }) => {
  const [lang, setLang] = useState<Lang.RU | Lang.EN>(Lang.RU)
  const toggleLang = () => setLang(lang === Lang.RU ? Lang.EN : Lang.RU)

  return (
    <div
      role="button"
      className={`flex cursor-pointer ${className}`}
      onClick={toggleLang}
    >
      {lang}
    </div>
  )
}
