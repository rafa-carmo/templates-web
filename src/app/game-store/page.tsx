'use client'

import {
  DiscordLogo,
  FacebookLogo,
  Globe,
  InstagramLogo,
  List,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import Carousel from '@/components/Carousel'
import { useState } from 'react'
import { Video } from './components/Video'
import { CyberpunkButton } from './components/buttons/Cyberpunk'
import { EpicButton } from './components/buttons/Epic'

const items = [
  {
    title: 'Cyberpunk',
    image: '/assets/game/cyberpunk-2077.png',
    video: '/assets/videos/cut.mp4',
    button: (
      <CyberpunkButton href="https://store.steampowered.com/app/1091500/Cyberpunk_2077/" />
    ),
    medias: [
      {
        name: 'Foruns',
        href: 'https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/',
        icon: <Globe size={50} weight="bold" />,
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/cyberpunkgame',
        icon: <DiscordLogo size={50} weight="bold" />,
      },
    ],
  },
  {
    title: 'Epic 7',
    image: '/assets/game/bi.png',
    video: '/assets/videos/web_bg.mp4',
    free: true,
    button: (
      <EpicButton href="https://play.google.com/store/apps/details?id=com.stove.epic7.google&hl=pt_BR&gl=US&pli=1" />
    ),
    medias: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/EpicSeven_Global/',
        icon: <InstagramLogo size={50} weight="bold" />,
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/EpicSevenGlobal',
        icon: <FacebookLogo size={50} weight="bold" />,
      },
      {
        name: 'Youtube',
        href: 'https://www.youtube.com/channel/UCa1C3tWzsn4FFRR7t3LqU5w',
        icon: <YoutubeLogo size={50} weight="bold" />,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/Epic7_Global',
        icon: <TwitterLogo size={50} weight="bold" />,
      },
    ],
  },
]

export default function GameStore() {
  const [selectedSlide, setSelectedSlide] = useState(0)
  function afterChange(indexSlide: number) {
    if (items.length <= indexSlide + 1) {
      setSelectedSlide(0)
      return
    }
    setSelectedSlide(indexSlide + 1)
  }

  return (
    <>
      <main className="w-full h-screen relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-black/10"></div>
        {items.map((item) => {
          if (selectedSlide === items.indexOf(item)) {
            return <Video key={`video-${item.title}`} video={item.video} />
          }
        })}
        <header className="absolute top-0 left-0 right-0 px-5 text-white flex gap-2">
          <List size={50} />
        </header>
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-lg mx-auto">
            <Carousel
              beforeChange={afterChange}
              settings={{
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 20000,
                speed: 1000,
              }}
            >
              {items.map((item) => (
                <div
                  key={item.title}
                  className="text-center text-white flex items-center justify-center outline-none"
                >
                  <img src={item.image} alt={item.title} className="w-full" />
                </div>
              ))}
            </Carousel>
            <div className="flex flex-col items-center justify-center mt-5">
              {items[selectedSlide].button}
            </div>
          </div>
        </div>

        <div className="absolute right-5 top-0 bottom-0 flex flex-col gap-3 items-center justify-center text-white">
          {items[selectedSlide].medias.map((media) => (
            <a
              key={media.name}
              href={media.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center font-bold uppercase"
            >
              {media.icon}
              {media.name}
            </a>
          ))}
        </div>
      </main>
      {/* <section className="w-full h-screen"></section> */}
    </>
  )
}
