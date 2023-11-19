import { ReactElement } from 'react'

import Header from './Header'

const DefaultLayout = ({ children }: { children: ReactElement }) => (
  <div className="grow bg-gray-200 text-gray-800 flex justify-center">
    <div className="w-full max-w-7xl p-6">
      <Header />
      {children}
    </div>
  </div>
)

export default DefaultLayout
