import { Tag } from 'antd'

enum AppType {
  Application = 'Application',
  CommercialPage = 'Commercial page',
  PesonalSite = 'Pesonal website',
  TestExercise = 'Test exercise',
  Other = 'Other',
}

const AppTypeColor = new Map([
  [AppType.Application, 'geekblue-inverse'],
  [AppType.CommercialPage, 'purple-inverse'],
  [AppType.PesonalSite, 'blue-inverse'],
  [AppType.TestExercise, 'magenta-inverse'],
  [AppType.Other, 'cyan-inverse'],
])

const apps = [
  {
    type: AppType.PesonalSite,
    name: 'Wedding',
    url: 'https://wedding.basharin.ru',
    repo: 'https://github.com/Hellek/wedding',
    desc: 'Cute wedding invitation',
  },
  {
    type: AppType.Application,
    name: 'Certificate builder',
    url: 'https://certificate-builder.basharin.ru',
    repo: 'https://github.com/Hellek/certificate-builder',
    desc: 'Automatization tool for my wife like a "canva.com". Iteratively place person names to previously uploaded image template',
  },
  {
    type: AppType.TestExercise,
    name: 'Flight aggregator',
    url: 'https://flight-aggregator.basharin.ru/',
    repo: 'https://github.com/Hellek/flight-aggregator',
    desc: 'Imitation of flight aggregator search page',
  },
  {
    type: AppType.CommercialPage,
    name: 'Psychologist pesonal site',
    url: 'https://basharina.ru',
    desc: 'Few pages with price, description and contats',
  },
  {
    type: AppType.CommercialPage,
    name: 'Corporate Video production studio',
    url: 'https://rice.basharina.ru',
    desc: 'Few pages with price, description and contats',
  },
  {
    type: AppType.CommercialPage,
    name: 'Coding cats',
    url: 'https://coding-cats.com',
    desc: 'Advert page for casual web studio',
  },
  {
    type: AppType.PesonalSite,
    name: 'Old personal site',
    url: 'https://hellek.ru',
    repo: 'https://github.com/Hellek/hellek.ru',
    desc: 'Made with nuxt.js',
  },
  {
    type: AppType.Other,
    name: 'Tinkoff investing hotkeys',
    repo: 'https://github.com/Hellek/tinkoff-invest-hotkeys',
    desc: 'At 2020 Tinkoff investing terminal has no hotkeys for buy/sell operations',
  },
]

export const MyApps = () => (
  <div className="flex flex-col gap-8">
    {apps.map(app => (
      <div key={app.name}>
        <div className="mb-1.5">
          <Tag color={AppTypeColor.get(app.type)}>{app.type}</Tag>

          <a
            href={app.url}
            className="mx-1"
            target="_blank"
            rel="noreferrer"
          >
            {app.name}
          </a>

          {app.repo && (
            <a href={app.repo} target="_blank" rel="noreferrer">
              <img
                src="/github-mark.svg"
                alt="Github icon"
                className="w-5 ml-2"
              />
            </a>
          )}
        </div>

        <div>{app.desc}</div>
      </div>
    ))}
  </div>
)
