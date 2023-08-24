'use client'
import {
  Brain,
  Camera,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Lightbulb,
  LinkedinLogo,
  List,
  PenNib,
  Phone,
  TwitterLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'

const portfolio = [
  {
    image: '/assets/agency/mockups/183.jpg',
  },
  {
    text: "We're masters in our craft, focusing on art direction, photography, set design & styling.",
  },
  {
    image: '/assets/agency/mockups/1544.jpg',
  },
  {
    image: '/assets/agency/mockups/390.avif',
  },
  {
    image: '/assets/agency/mockups/107441-27.avif',
  },
  {
    image: '/assets/agency/mockups/16480.avif',
  },
]

export default function studio() {
  return (
    <>
      <header className="absolute w-screen md:px-0 px-5">
        <div className="flex justify-between container mx-auto py-10 ">
          <div>
            <p className="font-bold text-2xl md:text-lg text-zinc-400 font-sans">
              Logo
            </p>
          </div>
          <div className="text-black md:pr-10">
            <List size={40} weight="bold" />
          </div>
        </div>
      </header>
      <main className="md:mx-auto w-full md:pl-32 flex md:flex-row flex-col md:gap-10 md:h-[90vh] pt-20 md:pt-24 pb-10 md:pb-5 items-center justify-center">
        <div className="w-full md:w-2/5 md:h-full pt-4 pb-10 md:py-0 flex justify-center flex-col gap-10 px-5 md:px-0">
          <div>
            <h1 className="uppercase md:text-6xl text-4xl font-bold font-mono">
              BRANDING
            </h1>
            <h3 className="md:text-3xl text-2xl font-mono font-medium text-zinc-800">
              A full service design studio
            </h3>
          </div>
          <p className="text-xl md:font-normal font-medium">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </p>

          <button className="px-10 py-3  bg-yellow-300 w-fit font-bold uppercase">
            Read More
          </button>
        </div>
        <div className="flex-1 bg-yellow-300 md:pl-20 md:h-full h-96 overflow-y-hidden md:w-auto w-full">
          <img
            src="/assets/agency/285396-57.avif"
            className="object-cover w-full md:w-full h-full"
            alt=""
          />
        </div>
      </main>
      <hr />
      <section className="container mx-auto md:pl-32 py-10">
        <div className="md:w-3/4 relative">
          <div className="md:w-5/6 h-96 md:h-[35rem] overflow-hidden relative z-0">
            <Image
              src="/assets/agency/conceito-de-estrategia-de-planejamento-de-estrategia-de-marketing.jpg"
              alt="a"
              width={1024}
              height={450}
              objectFit="cover"
            />
          </div>

          <div className="z-10 absolute left-0 md:left-auto right-0 bottom-0 grid grid-cols-2 gap-2 md:gap-5">
            <div className="md:w-52 md:h-36 bg-white/75 flex items-center justify-center p-5 md:p-10 flex-col gap-2 border border-black">
              <div className="p-4 bg-yellow-300 rounded-full">
                <Camera className="w-5 h-5 md:w-14 md:h-14 " />
              </div>
              <p className="uppercase font-bold md:text-base text-xs">
                Photography
              </p>
            </div>
            <div className="md:w-52 md:h-36 bg-white/75 flex items-center justify-center p-5 md:p-10 flex-col gap-2 border border-black">
              <div className="p-4 bg-yellow-300 rounded-full">
                <PenNib className="w-5 h-5 md:w-14 md:h-14 " />
              </div>
              <p className="uppercase font-bold md:text-base text-xs">Design</p>
            </div>
            <div className="md:w-52 md:h-36 bg-white/75 flex items-center justify-center p-5 md:p-10 flex-col gap-2 border border-black">
              <div className="p-4 bg-yellow-300 rounded-full">
                <Brain className="w-5 h-5 md:w-14 md:h-14 " />
              </div>
              <p className="uppercase font-bold md:text-base text-xs">
                Creative
              </p>
            </div>
            <div className="md:w-52 md:h-36 bg-white/75 flex items-center justify-center p-5 md:p-10 flex-col gap-2 border border-black">
              <div className="p-4 bg-yellow-300 rounded-full">
                <Lightbulb className="w-5 h-5 md:w-14 md:h-14 " />
              </div>
              <p className="uppercase font-bold md:text-base text-xs">
                Marketing
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlSpace="preserve"
            className="w-52 h-20 absolute right-5 top-2 text-yellow-300 z-10 hidden"
            viewBox="0 0 160 60"
            x="0px"
            y="0px"
            fill="currentColor"
          >
            <path
              d="M7.3,0C3.3,0,0,3.1,0,6.9s3.3,6.9,7.3,6.9s7.3-3.1,7.3-6.9S11.2,0,7.3,0z M31.5,0c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9
	s7.3-3.1,7.3-6.9S35.5,0,31.5,0z M55.8,0c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9S63,10.7,63,6.9S59.7,0,55.8,0z M80,0
	c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9s7.3-3.1,7.3-6.9S84,0,80,0z M104.2,0c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9
	c4,0,7.3-3.1,7.3-6.9S108.2,0,104.2,0z M128.5,0c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9c4,0,7.3-3.1,7.3-6.9S132.5,0,128.5,0z
	 M152.7,0c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9c4,0,7.3-3.1,7.3-6.9S156.7,0,152.7,0z M7.3,23.1c-4,0-7.3,3.1-7.3,6.9
	s3.3,6.9,7.3,6.9s7.3-3.1,7.3-6.9S11.2,23.1,7.3,23.1z M31.5,23.1c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9s7.3-3.1,7.3-6.9
	S35.5,23.1,31.5,23.1z M55.8,23.1c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9S63,33.8,63,30S59.7,23.1,55.8,23.1z M80,23.1
	c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9s7.3-3.1,7.3-6.9S84,23.1,80,23.1z M104.2,23.1c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9
	c4,0,7.3-3.1,7.3-6.9S108.2,23.1,104.2,23.1z M128.5,23.1c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9c4,0,7.3-3.1,7.3-6.9
	S132.5,23.1,128.5,23.1z M152.7,23.1c-4,0-7.3,3.1-7.3,6.9s3.3,6.9,7.3,6.9c4,0,7.3-3.1,7.3-6.9S156.7,23.1,152.7,23.1z M7.3,46.2
	c-4,0-7.3,3.1-7.3,6.9C0,56.9,3.3,60,7.3,60s7.3-3.1,7.3-6.9C14.5,49.3,11.2,46.2,7.3,46.2z M31.5,46.2c-4,0-7.3,3.1-7.3,6.9
	c0,3.8,3.3,6.9,7.3,6.9s7.3-3.1,7.3-6.9C38.8,49.3,35.5,46.2,31.5,46.2z M55.8,46.2c-4,0-7.3,3.1-7.3,6.9c0,3.8,3.3,6.9,7.3,6.9
	s7.3-3.1,7.3-6.9C63,49.3,59.7,46.2,55.8,46.2z M80,46.2c-4,0-7.3,3.1-7.3,6.9c0,3.8,3.3,6.9,7.3,6.9s7.3-3.1,7.3-6.9
	C87.3,49.3,84,46.2,80,46.2z M104.2,46.2c-4,0-7.3,3.1-7.3,6.9c0,3.8,3.3,6.9,7.3,6.9c4,0,7.3-3.1,7.3-6.9
	C111.5,49.3,108.2,46.2,104.2,46.2z M128.5,46.2c-4,0-7.3,3.1-7.3,6.9c0,3.8,3.3,6.9,7.3,6.9c4,0,7.3-3.1,7.3-6.9
	C135.8,49.3,132.5,46.2,128.5,46.2z M152.7,46.2c-4,0-7.3,3.1-7.3,6.9c0,3.8,3.3,6.9,7.3,6.9c4,0,7.3-3.1,7.3-6.9
	C160,49.3,156.7,46.2,152.7,46.2z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="flex md:flex-row flex-col gap-5 md:gap-32">
        <div className=" w-full md:w-3/6 relative md:h-[30rem] bg-zinc-800 py-10 pr-5">
          <div className="md:absolute md:-right-16 md:top-0 md:bottom-0 flex md:flex-row flex-col items-center gap-16">
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-7xl text-yellow-300">about</h3>
              <h4 className="text-white text-xl pl-2">We build brands</h4>
            </div>
            <div className="w-72 md:h-[25rem] overflow-hidden">
              <Image
                src="/assets/agency/mulher-de-negocios-sorridente-de-tiro-medio.jpg"
                alt=""
                width={300}
                height={250}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <div className="md:max-w-[20%] md:p-0 px-10 flex flex-col items-center justify-center gap-3">
          <p className="text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <button className="px-10 py-3 bg-yellow-300 w-fit font-bold uppercase">
            Read More
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-5 pt-10">
        <h2 className="text-6xl font-bold text-center">Identity projects</h2>
        <p className="text-center max-w-sm md:px-0 px-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="md:grid md:grid-cols-3 flex flex-col gap-3 md:gap-0">
          {portfolio.map((item, key) => (
            <div
              key={`portfolio-${key}`}
              className="w-full h-72 flex items-center justify-center overflow-hidden bg-zinc-800"
            >
              {item.image && (
                <Image
                  src={item.image}
                  width={720}
                  height={280}
                  alt="porfolio-img"
                  style={{ objectFit: 'contain' }}
                />
              )}
              {item.text && (
                <p className="text-center px-5 text-lg font-medium text-white">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-screen container relative mx-auto md:block flex flex-col">
        <div className="md:pr-10 md:pl-20 relative w-full md:mb-0 mb-20">
          <div className="w-36 h-36 absolute -z-10 top-16 md:-top-16 right-0 md:right-auto md:left-40 bg-yellow-300 overflow-hidden frame"></div>
          <div className="w-full md:w-2/4 p-10 md:ml-36 mt-36 border-[6px] border-yellow-300 flex flex-col items-center justify-center gap-5 relative z-0 bg-white">
            <h4 className="uppercase text-lg">WE CREATE BRANDS</h4>
            <h3 className="font-bold text-5xl font-mono">Creative Design</h3>
            <p>
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
              . Phasellus sed efficitur dolor, et ultricies sapien. Quisque
              fringilla sit amet dolor commodo efficitur. Aliquam et sem odio.
              In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
            </p>
            <button className="px-4 py-2 text-white bg-black">
              learn more
            </button>
          </div>
        </div>
        <div className="w-2/4 absolute h-72 bg-yellow-300 left-[50%] -m-44 -z-10 hidden md:block"></div>
        <div className="w-screen md:w-3/4 relative flex md:flex-row flex-col-reverse items-center justify-center z-0 gap-14">
          <div className="w-full md:w-[35rem] flex items-end flex-col gap-5 mt-20">
            <img
              src="/assets/agency/17096.avif"
              alt=""
              className="border-[6px] border-yellow-300 w-96 h-64"
            />
            <p className="w-80">
              Magna fringilla urna porttitor rhoncus dolor. Nisl rhoncus mattis
              rhoncus urna neque viverra justo nec ultrices. Diam donec
              adipiscing tristique risus nec feugiat. Semper auctor neque vitae
              tempus quam pellentesque nec nam aliquam. Eget mi proin sed
              libero.
            </p>
          </div>
          <div className="-mt-16 w-72 flex flex-col gap-5">
            <img
              src="/assets/agency/1742.avif"
              alt=""
              className="border-[6px] border-yellow-300 w-72 h-80"
            />
            <h4 className="font-bold text-2xl">Our Story</h4>
            <p className="px-2">
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 flex items-center justify-center md:flex-row flex-col gap-5 bg-zinc-800">
        <div className="w-full md:w-2/4  py-10 md:pr-5 flex items-center justify-center md:gap-0 gap-10 md:flex-row flex-col">
          <div className="flex items-center justify-center gap-5 flex-1">
            <h3 className="font-bold text-4xl text-yellow-300">Contact-us</h3>
          </div>
          <div className="flex flex-col items-end justify-center gap-10">
            <div className="flex flex-col items-end justify-center w-full pr-5 gap-5">
              <div className="flex flex-col items-center gap-3 text-white">
                <Phone size={32} className="text-yellow-300" />
                <p className="text-white text-xl pl-2">(99) 9999-9999</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-white">
                <WhatsappLogo size={32} className="text-yellow-300" />
                <p className="text-white text-xl pl-2">(99) 9 9999-9999</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-white">
                <EnvelopeSimple size={32} className="text-yellow-300" />
                <p className="text-white text-xl pl-2">email@email.com</p>
              </div>
            </div>

            <div className="flex gap-5 ">
              <button className="text-white">
                <FacebookLogo size={32} weight="bold" />
              </button>
              <button className="text-white">
                <InstagramLogo size={32} weight="bold" />
              </button>
              <button className="text-white">
                <TwitterLogo size={32} weight="bold" />
              </button>
              <button className="text-white">
                <LinkedinLogo size={32} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <form
            action=""
            className="px-5 md:px-0 md:max-w-md w-full flex flex-col gap-10 "
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="Your name"
                className="w-full pl-2 py-2 outline-none"
              />
              <hr />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Your E-Mail"
                className="w-full pl-2 py-2 outline-none"
              />
              <hr />
            </div>
            <div className="w-full">
              <textarea
                placeholder="Your Message here"
                className="w-full h-20 pl-2 py-2 resize-none outline-none"
              />
              <hr />
            </div>
            <button className="px-3 py-1 bg-yellow-300">Enviar</button>
          </form>
        </div>
      </section>

      <footer className="w-full h-10 flex items-center justify-center bg-zinc-800 pt-5">
        <p className="text-white">
          Site created by <a href="#">Rafael</a>
        </p>
      </footer>
    </>
  )
}
