import { ReactElement } from 'react'

import { BlobsWrapper } from '@components/BlobsWrapper'

import Header from './Header'

const DefaultLayout = ({ children }: { children: ReactElement }) => (
  <BlobsWrapper className="grow">
    <div className="flex justify-center">
      <div className="w-full max-w-7xl p-6">
        <Header />
        {children}
      </div>
    </div>
  </BlobsWrapper>
)

export default DefaultLayout
