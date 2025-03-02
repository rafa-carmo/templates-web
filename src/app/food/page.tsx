'use client'

import FoodCard from './foodCard'
import PictureCard from './pictureCard'
import MenuCard from './menuCard'
import { List } from '@phosphor-icons/react'

const cards = [
  {
    img: '/assets/food/uma-tigela-de-comida-com-uma-colher-e-uma-tigela-de-arroz-ao-lado.jpg',
    text: 'FOOD SOURCING',
  },
  {
    img: '/assets/food/composicao-de-alimentos-brasileiros-de-alto-angulo.jpg',
    text: 'RESTAURANT',
  },
  {
    img: '/assets/food/2829-6473.avif',
    text: 'MENU DEVELOPMENT',
  },
]

const menuCards = [
  {
    img: '/assets/food/pessoa-pegando-um-pedaco-de-pizza-deliciosa-de-pepperoni-com-queijo_181624-18235.avif',
    text: 'HOT PIZZA',
  },
  {
    img: '/assets/food/2148537243.avif',
    text: 'Salads',
  },
  {
    img: '/assets/food/23-2150251798.avif',
    text: 'Bakery',
  },
  {
    img: '/assets/food/114579-3301.avif',
    text: 'Drinks',
  },
]

export default function Food() {
  return (
    <>
      <header className="left-0 right-0 flex items-center justify-end md:justify-center py-7 px-5 bg-amber-50 absolute">
        <ul className="md:flex items-center justify-center gap-7 hidden cursor-pointer">
          <li className="uppercase "><a href="#">Home</a></li>
          <li className="uppercase "><a href="#special">Special</a></li>
          <li className="uppercase "><a href="#menu">Menu</a></li>
          <li className="uppercase "><a href="#contact">Contact</a></li>
        </ul>
        <button className="md:hidden block">
          <List size={30} />
        </button>
      </header>

      <main className="flex h-screen w-full bg-[url('/assets/food/quadro-de-comida-de-vista-superior-com-copia-espaco.jpg')] bg-right-top bg-no-repeat bg-cover pt-14 md:px-0 px-5">
        <div className="container mx-auto max-w-4xl w-full flex">
          <div className="flex flex-col items-start justify-center w-full md:w-4/6 gap-7 cursor-default">
            <div className="flex flex-col px-2 py-6 rounded-full items-center justify-center bg-lime-500 gap-3">
              <h3 className="font-bold text-center text-4xl">40%</h3>
              <p className="font-bold text-center w-3/4 text-xl">
                Business Lunch
              </p>
            </div>
            <p className="text-white font-bold text-xl font-serif uppercase">
              New Restaurant
            </p>
            <p className="text-white font-bold text-4xl md:text-6xl font-serif">
              Where every ingredient tells a story
            </p>

            <button className="px-7 py-4 bg-yellow-400 rounded-full font-bold text-lg mt-5">
              Read More
            </button>
          </div>
        </div>
      </main>

      <PictureCard cards={cards} />
      <section id="special">

      <FoodCard
        price="R$ 30"
        name="Chicken"
        image="/assets/food/aproxime-se-com-uma-deliciosa-comida-asiatica_23-2150535876.avif"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      />

      <PictureCard cards={cards} hiddenText />
      <FoodCard
        price="R$ 45"
        name="Steak with vegetable"
        image="/assets/food/carne-frita-com-legumes-e-vinho-tinto_140725-4689.avif"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        reverse
      />
      </section>

      <section className="container mx-auto flex flex-col items-center justify-center gap-10" id="menu">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-white text-4xl text-center font-bold">
            View Our Menu
          </h2>
          <h3 className="text-white font-medium text-xl text-center max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-10 w-full max-w-[54rem]">
          {menuCards.map((menu, key) => (
            <MenuCard key={`${menu.text}-${key}`} {...menu} />
          ))}
        </div>
      </section>

      <section className="h-[80vh] w-full bg-[url('/assets/food/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg')] bg-left md:bg-right-top bg-no-repeat bg-cover mt-10 relative">
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-0' />
        <div className="flex h-full items-center justify-center lg:justify-end w-full lg:w-2/4 lg:mx-4 relative z-10" id="contact">
          <div className="flex flex-col gap-5 lg:gap-16 w-full max-w-lg">
            <h3 className="text-white text-xl lg:text-4xl font-bold">
              Keep up to date with us
            </h3>
            <div className="flex items-center gap-1 lg:gap-5 w-full">
              <input
                type="text"
                className="px-5 py-3 rounded-full lg:text-xl flex-1"
                placeholder="email@email.com"
              />
              <button className="bg-green-600 lg:text-lg font-bold lg:px-4 lg:py-3 p-3 rounded-full text-white h-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
