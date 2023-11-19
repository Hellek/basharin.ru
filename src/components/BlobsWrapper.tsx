import './BlobsWrapper.css'

import { ReactNode } from 'react'

const cicles = [
  { cx: '10%', cy: '10%', r: 80 },
  { cx: '50%', cy: '10%', r: 40 },
  { cx: '17%', cy: '15%', r: 70 },
  { cx: '90%', cy: '20%', r: 120 },
  { cx: '30%', cy: '25%', r: 30 },
  { cx: '50%', cy: '60%', r: 80 },
  { cx: '70%', cy: '90%', r: 10 },
  { cx: '90%', cy: '60%', r: 90 },
  { cx: '30%', cy: '90%', r: 80 },
  { cx: '10%', cy: '10%', r: 80 },
  { cx: '50%', cy: '10%', r: 20 },
  { cx: '17%', cy: '15%', r: 70 },
  { cx: '40%', cy: '20%', r: 120 },
  { cx: '30%', cy: '25%', r: 30 },
  { cx: '80%', cy: '60%', r: 80 },
  { cx: '17%', cy: '10%', r: 100 },
  { cx: '40%', cy: '60%', r: 90 },
  { cx: '10%', cy: '50%', r: 80 },
]

export const BlobsWrapper = ({ className, children }: { className?: string, children: ReactNode }) => (
  <div
    className={`blobs-wrapper relative flex flex-col ${className}`}
  >
    <svg key="asdblobs" className="blobs box-border">
      <image xlinkHref="/intro-bg.jpg" mask="url(#mask)" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
      <defs>
        <filter id="gooey" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
      </defs>
      <mask id="mask" x="0" y="0">
        <g style={{ filter: 'url(#gooey)' }}>
          {cicles.map((c, i) => (
            <circle
                // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="blob"
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              fill="white"
              stroke="white"
            />
          ))}
        </g>
      </mask>
    </svg>

    <div className="relative">
      {children}
    </div>
  </div>
)
