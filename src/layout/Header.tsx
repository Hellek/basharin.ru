import { NavLink } from 'react-router-dom'

import Card from '@components/Card'
// import { LangSwitcher } from '@components/LangSwitcher'
import { ThemeSwitcher } from '@components/ThemeSwitcher'

import { publicRoutes } from '@app/routes'

const Header = () => (
  <Card className="flex justify-between pb-4 mb-5">
    <div>
      <div className="text-2xl mb-2">Hej! My name is Roman, nice to see you here!</div>

      <div className="flex gap-3">
        <NavLink to={publicRoutes.CareerTimeline.path}>career timeline</NavLink>
        <NavLink to={publicRoutes.MyApps.path}>my apps</NavLink>
        <a href="https://career.habr.com/rbasharin" target="_blank" rel="noreferrer">habr career</a>
        <a href="https://www.linkedin.com/in/roman-basharin" target="_blank" rel="noreferrer">linkedIn</a>
      </div>
    </div>

    <div className="flex gap-2">
      {/* <LangSwitcher /> */}
      <ThemeSwitcher />
    </div>
  </Card>
)

export default Header
