'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Card from './Card'

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
  ssr: false, // This ensures the component is not SSR'd
})

const navLinks = {
  HomePage: {
    path: '/',
    label: 'career timeline',
  },
  CareerTimeline: {
    path: '/career-timeline',
    label: 'career timeline',
  },
  MyApps: {
    path: '/my-apps',
    label: 'my apps',
  },
}

type NavLinksKeys = keyof typeof navLinks

const InternalNavs = ({ navLinksKeys }: { navLinksKeys: NavLinksKeys[] }) => {
  const pathname = usePathname()

  const setLinkActiveClass = (href: string) => {
    return pathname === href ? ' text-blue-700' : ''
  }

  return navLinksKeys.map(navLinksKey => {
    const nav = navLinks[navLinksKey]

    if (nav.path === navLinks.HomePage.path) return

    return (
      <Link
        key={navLinksKey}
        href={nav.path}
        className={setLinkActiveClass(nav.path)}
      >
        {nav.label}
      </Link>
    )
  })
}

const Header = () => {
  const navLinksKeys = Object.keys(navLinks) as Array<NavLinksKeys>

  return (
    <Card className="flex justify-between pb-4 mb-5">
      <div>
        <div className="text-2xl mb-2">Hej! My name is Roman, nice to see you here!</div>

        <div className="flex gap-3">
          <InternalNavs navLinksKeys={navLinksKeys} />

          <a href="https://career.habr.com/rbasharin" target="_blank" rel="noreferrer">habr career</a>
          <a href="https://www.linkedin.com/in/roman-basharin" target="_blank" rel="noreferrer">linkedIn</a>
        </div>
      </div>

      <div className="flex gap-2">
        {/* <LangSwitcher /> */}
        <ThemeSwitcher />
      </div>
    </Card>
  )}

export default Header
