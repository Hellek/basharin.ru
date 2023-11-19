import { NavLink } from 'react-router-dom'
import { Divider } from 'antd'

import { publicRoutes } from '@app/routes'

const Header = () => (
  <div>
    <div className="text-2xl mb-2">Hej! My name is Roman, nice to see you here!</div>

    <div className="flex gap-3">
      <NavLink to={publicRoutes.CareerTimeline.path}>career timeline</NavLink>
      <NavLink to={publicRoutes.MyApps.path}>my apps</NavLink>
      <a href="https://career.habr.com/rbasharin" target="_blank" rel="noreferrer">habr career</a>
      <a href="https://www.linkedin.com/in/roman-basharin" target="_blank" rel="noreferrer">linkedIn</a>
    </div>

    <Divider className="bg-gray-500" />
  </div>
)

export default Header
