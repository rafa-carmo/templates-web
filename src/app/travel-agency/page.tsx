'use client'
import Carousel from '@/components/Carousel'
import {
  Buildings,
  Campfire,
  FacebookLogo,
  GlobeHemisphereWest,
  InstagramLogo,
  List,
  SuitcaseRolling,
  TwitterLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'

const images = [
  '/assets/travel-gallery/mountain.jpg',
  '/assets/travel-gallery/pexels-david-bartus-586687.jpg',
  '/assets/travel-gallery/pexels-laura-stanley-2252315.jpg',
  '/assets/travel-gallery/pexels-sam-kolder-2387871.jpg',
  '/assets/travel-gallery/pexels-amine-msiouri-2108845.jpg',
  '/assets/travel-gallery/pexels-oleksandr-p-2070485.jpg',
  '/assets/travel-gallery/pexels-amine-msiouri-2108813.jpg',
]

export default function travelAgency() {
  return (
    <>
      <header className="shadow-sm w-[99vw] md:w-screen py-5 px-5 fixed bg-white/75 z-20 overflow-x-hidden">
        <div className="container mx-auto flex items-center">
          <a className="flex-1 text-black font-bold uppercase"> Logo </a>
          <button className="text-black">
            <List size={36} weight="bold" />
          </button>
        </div>
      </header>

      <main className="h-screen w-full" id="home">
        <div className="grid place-items-center w-full h-full text-white bg-slate-700/40 relative">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 bottom-0 left-0 right-0 -z-10 object-cover w-full h-full"
          >
            <source
              src="/assets/pexels_videos_2675515 (1080p).mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col gap-4 text-center items-center justify-center px-4 md:px-0 relative z-0">
            <h1 className="text-2xl uppercase">Travel Agency</h1>

            <h1 className="text-xl md:text-7xl font-serif font-bold drop-shadow-sm">
              Wonderful Tours
            </h1>
            <p className="md:text-lg font-thin">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <button className="rounded-xl text-lg px-3 py-4 border font-bold border-white hover:text-zinc-700 hover:bg-white transition-colors duration-300 mt-10 bg-zinc-400/50">
              Read More
            </button>
          </div>
        </div>
      </main>
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:-mt-16 mt-2 gap-5 max-w-full overflow-x-hidden downToUp px-3 md:px-0">
        <button className="px-10 py-2 border-2 flex flex-col items-center justify-center h-64 bg-black/75 text-white gap-5 rounded-lg">
          <SuitcaseRolling size={36} />
          <h3 className="uppercase font-medium text-xl tracking-wider">
            TRAVELLER <br />
            TOURS
          </h3>
          <p>Lorem Ipsum has been the industrys standard</p>
        </button>
        <button className="px-10 py-2 border-2 flex flex-col items-center justify-center h-64 bg-black/75 text-white gap-5 rounded-lg">
          <GlobeHemisphereWest size={36} />
          <h3 className="uppercase font-medium text-xl tracking-wider">
            Explore the <br />
            World
          </h3>
          <p>Lorem Ipsum has been the industrys standard</p>
        </button>
        <button className="px-10 py-2 border-2 flex flex-col items-center justify-center h-64 bg-black/75 text-white gap-5 rounded-lg">
          <Campfire size={36} />
          <h3 className="uppercase font-medium text-xl tracking-wider">
            Adventure
          </h3>
          <p>Lorem Ipsum has been the industrys standard</p>
        </button>
        <button className="px-10 py-2 border-2 flex flex-col items-center justify-center h-64 bg-black/75 text-white gap-5 rounded-lg">
          <Buildings size={36} />
          <h3 className="uppercase font-medium text-xl tracking-wider">
            Greatest hotels
          </h3>
          <p>Lorem Ipsum has been the industrys standard</p>
        </button>
      </section>

      <section className="min-h-screen pt-24 container mx-auto max-w-full overflow-x-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-10 w-2/3 text-center trips text-white">
            <h3 className="font-bold text-2xl lg:text-5xl text-camping-primary">
              Good Trips Only
            </h3>
            <p className="lg:text-lg">
              Lorem Ipsum has been the industrys standard Click again or double
              click to start editing the text.
            </p>
            <button className="rounded-xl text-lg px-3 py-4 border font-bold border-camping-primary hover:text-zinc-700 hover:bg-white transition-colors duration-300 mt-10 lg:block hidden">
              Read More
            </button>
          </div>
          <div className="items-center justify-center w-full img-trips lg:mt-0 mt-10">
            <div className="relative text-camping-primary w-full lg:w-fit lg:block flex items-center justify-center">
              <img
                src="/assets/traveler-01.jpg"
                className="rounded-full lg:rounded-full md:rounded-sm md:w-3/4 md:h-96 w-72 h-72 lg:w-[556px] lg:h-[556px] object-cover relative z-0"
                alt=""
              />
              <div className="absolute z-10 lg:bottom-20 left-10 bottom-10">
                <svg
                  className="lg:w-56 w-32"
                  viewBox="0 0 160 50"
                  x="0px"
                  y="0px"
                  id="svg-c9fe"
                  fill="currentColor"
                >
                  <path
                    d="M133,26.7c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,22
                    c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0
                    l-3.8,4.7C146.9,20.2,142.3,20.2,133,26.7z M133,10.8c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0
                    c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,6.1c11.2-7.8,20.6-8.1,32.2,0c11,7.6,19,8.5,31.3,0C75.1-2,85.9-1.6,97,6.1
                    c11.4,8,20.3,8.3,32.2,0C140.8-2,148.4-2,160,6.1l-3.8,4.7C146.9,4.3,142.3,4.3,133,10.8z M32.2,38c11,7.6,19,8.5,31.3,0
                    c11.6-8.1,22.4-7.7,33.5,0c11.4,8,20.3,8.3,32.2,0c11.6-8.1,19.2-8.1,30.8,0l-3.8,4.7c-9.3-6.5-13.9-6.5-23.3,0
                    c-13.9,9.7-25.8,9.7-39.8,0c-9.1-6.3-16.8-6.3-25.9,0c-13.8,9.6-25.1,9.6-38.9,0c-9.2-6.4-15.4-6.4-24.6,0L0,38
                    C11.2,30.2,20.6,29.9,32.2,38z"
                  ></path>
                </svg>
              </div>
              <div className="absolute right-10 md:right-14 lg:right-24 top-0 -z-10">
                <svg
                  className="w-40"
                  viewBox="0 0 160 160"
                  x="0px"
                  y="0px"
                  id="svg-a0bf"
                  fill="currentColor"
                >
                  <path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80 s80-35.8,80-80S124.2,0,80,0L80,0z"></path>
                </svg>
              </div>
              <div className="absolute left-2 lg:-left-14 top-1/3 z-10">
                <svg
                  className="w-24"
                  viewBox="0 0 160 160"
                  x="0px"
                  y="0px"
                  id="svg-a0bf"
                  fill="currentColor"
                >
                  <path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80 s80-35.8,80-80S124.2,0,80,0L80,0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full downToUp py-24 px-4">
        <Carousel
          settings={{
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows: false,
            autoplay: true,
            speed: 2000,
          }}
        >
          {images.map((image) => (
            <div
              key={image}
              className="w-2/3 md:w-1/3 h-52 md:h-96 flex items-center justify-center relative"
            >
              <Image
                src={image}
                alt="Image"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </section>
      <div
        className="opacity-0 z-40 fixed top-0 bottom-0 left-0 right-0 bg-black/75 pointer-events-none transition-all duration-300"
        id="fullpage"
      >
        <div
          className="bg-contain bg-no-repeat bg-center absolute top-10 bottom-10 left-10 right-10 transition-all duration-500"
          id="imageFull"
        ></div>
      </div>

      <section className="h-screen w-full bg-center bg-no-repeat bg-cover bg-[url('/assets/pexels-dreamlens-production-2450296.jpg')] mt-10 bg-opacity-20">
        <div className="flex w-full h-full items-center justify-end bg-black bg-opacity-70">
          <div className="w-full md:w-2/4 text-white flex flex-col gap-6 md:px-0 px-10">
            <h4 className="text-5xl font-medium max-w-lg font-serif break-words">
              What is Lorem Ipsum
            </h4>
            <p className="text-lg max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="text-4xl flex gap-3">
              <FacebookLogo />
              <InstagramLogo />
              <WhatsappLogo />
              <TwitterLogo />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
