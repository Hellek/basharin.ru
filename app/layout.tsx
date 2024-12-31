import './globals.css'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { BlobsWrapper } from '@/components/BlobsWrapper'
import Header from '@/components/Header'

const fontGoogle = Open_Sans({ weight: ['400', '500', '600', '700'], subsets: ['cyrillic-ext'] })

export const metadata: Metadata = {
  title: 'Roman Basharin',
  description: 'Roman Basharin personal app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={'flex ' + fontGoogle.className}>
        <BlobsWrapper className="grow">
          <div className="flex justify-center">
            <div className="w-full max-w-7xl p-6">
              <Header />
              {children}
            </div>
          </div>
        </BlobsWrapper>
      </body>
    </html>
  )
}
