import { Divider } from 'antd'

import { MyApps } from '@components/MyApps'

export const HomePage = () => (
  <div
    className="grow flex-center text-gray-50 p-6"
    style={{
      background: 'linear-gradient(45deg,#2196f3,#010c14)',
      backgroundSize: '200% 200%',
      animation: 'background 6s ease infinite',
    }}
  >
    <div>
      <div className="text-2xl">Hej! My name is Roman, nice to see you here!</div>

      <Divider className="bg-gray-500" />

      <div>
        <span>CV on </span>
        <a href="https://career.habr.com/rbasharin" target="_blank" rel="noreferrer">Habr Career</a>
        <span> (EN/RU)</span>
      </div>

      <div className="mt-2">
        <a href="https://www.linkedin.com/in/roman-basharin" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      <Divider className="bg-gray-500" />

      <MyApps />
    </div>
  </div>
)
