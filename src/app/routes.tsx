import { CareerTimeline } from '@pages/CareerTimeline'
import { MyApps } from '@pages/MyApps'
import NotFound from '@pages/NotFound'

export const publicRoutes = {
  HomePage: {
    path: '/',
    element: <CareerTimeline />,
  },
  CareerTimeline: {
    path: '/career-timeline',
    element: <CareerTimeline />,
  },
  MyApps: {
    path: '/my-apps',
    element: <MyApps />,
  },
  NotFound: {
    path: '*',
    element: <NotFound />,
  },
}
