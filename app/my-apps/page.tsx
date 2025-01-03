import Card from '@/components/Card'
import { OctocatIcon } from '@/components/Icons'
import Tag from '@/components/Tag'
import { Tooltip } from '@/components/Tooltip'

type Technology = 'react' | 'nextjs' | 'eslint' | 'husky'
  | 'lint-staged' | 'tailwindcss' | 'postcss'
  | 'typescript' | 'emailjs' | 'vuejs@2' | 'nuxtjs' | 'svg'
  | 'css animations' | 'stylelint' | 'webpack'

enum AppType {
  Application = 'Application',
  CommercialPage = 'Commercial page',
  PesonalSite = 'Pesonal website',
  TestExercise = 'Test exercise',
  Other = 'Other',
}

const AppTypeColor = new Map([
  [AppType.Application, 'bg-blue-700'],
  [AppType.CommercialPage, 'bg-purple-700'],
  [AppType.PesonalSite, 'bg-blue-500'],
  [AppType.TestExercise, 'bg-pink-500'],
  [AppType.Other, 'bg-emerald-600'],
])

type Project = {
  type: AppType
  name: string
  desc: string
  url?: string
  repo?: string
  technologies?: Technology[]
  closed?: boolean
}

const apps: Project[] = [
  {
    type: AppType.CommercialPage,
    name: 'My pesonal site',
    desc: 'Few pages with info about my career and personal projects',
    url: 'https://basharin.ru',
    repo: 'https://github.com/Hellek/basharin.ru',
    technologies: ['react', 'eslint', 'stylelint', 'webpack', 'husky', 'lint-staged', 'tailwindcss', 'postcss', 'typescript', 'svg', 'css animations'],
  },
  {
    type: AppType.Application,
    name: 'Nodejs app: search file duplicates',
    desc: 'Recursively search duplicates (by size and content) at specific folder. Put duplicates to separate in memory buckets',
    repo: 'https://github.com/Hellek/pet-search-image-duplicates',
  },
  {
    type: AppType.Application,
    name: 'WebGL graph',
    desc: 'Prototype of tmap FE graph. Drawn with WebGL (three.js). Accepts data at tmap format (https://tmap.gdb.tools/index.html#ex-drugbank)',
    url: 'https://threejs-graph-builder.basharin.ru',
    repo: 'https://github.com/Hellek/threejs-graph-builder',
  },
  {
    type: AppType.PesonalSite,
    name: 'Wedding',
    desc: 'Cute wedding invitation',
    url: 'https://wedding.basharin.ru',
    repo: 'https://github.com/Hellek/wedding',
  },
  {
    type: AppType.Application,
    name: 'Certificate builder',
    desc: 'Automatization tool for my wife like a "canva.com". Iteratively place person names to previously uploaded image template',
    url: 'https://certificate-builder.basharin.ru',
    repo: 'https://github.com/Hellek/certificate-builder',
  },
  {
    type: AppType.TestExercise,
    name: 'Flight aggregator',
    desc: 'Imitation of flight aggregator search page',
    url: 'https://flight-aggregator.basharin.ru/',
    repo: 'https://github.com/Hellek/flight-aggregator',
  },
  {
    type: AppType.CommercialPage,
    name: 'Psychologist pesonal site',
    desc: 'Few pages with price, description and contats',
    url: 'https://basharina.ru',
    technologies: ['react', 'nextjs', 'eslint', 'husky', 'lint-staged', 'tailwindcss', 'postcss', 'typescript', 'emailjs'],
  },
  {
    type: AppType.CommercialPage,
    name: 'Corporate Video production studio',
    desc: 'Few pages with price, description and contats',
    url: 'https://rice.basharina.ru',
  },
  {
    type: AppType.CommercialPage,
    name: 'Coding cats',
    desc: 'Advert page for casual web studio',
    url: 'https://coding-cats.com',
    closed: true,
  },
  {
    type: AppType.PesonalSite,
    name: 'Old personal site',
    desc: 'Made with nuxt.js',
    url: 'https://hellek.ru',
    repo: 'https://github.com/Hellek/hellek.ru',
    closed: true,
    technologies: ['vuejs@2', 'nuxtjs'],
  },
  {
    type: AppType.Other,
    name: 'Tinkoff investing hotkeys',
    desc: 'At 2020 Tinkoff investing terminal has no hotkeys for buy/sell operations',
    repo: 'https://github.com/Hellek/tinkoff-invest-hotkeys',
    closed: true,
  },
]

export default function MyApps() {
  return (
    <div className="flex flex-col gap-7">
      {apps.map(app => (
        <Card key={app.name} className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <Tag className={'mr-0 ' + AppTypeColor.get(app.type)}>{app.type}</Tag>

            <a
              href={app.url}
              target="_blank"
              rel="noreferrer"
            >
              {app.name}
            </a>

            <Tooltip title="Terminated">
              {app.closed === true && (
                <div className="cursor-pointer">💀</div>
              )}
            </Tooltip>

            {app.repo && (
              <a href={app.repo} target="_blank" rel="noreferrer" className="flex">
                <OctocatIcon className="fill-black dark:fill-white" />
              </a>
            )}
          </div>

          <div>{app.desc}</div>

          {app.technologies && (
            <div className="flex gap-2">
              <div>The most notable technologies: </div>

              <div>{app.technologies.join(', ')}</div>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}