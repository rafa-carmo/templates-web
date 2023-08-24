import { ReactNode } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface CarouselProps {
  settings: Settings
  children: ReactNode
}

export default function Carousel({ settings, children }: CarouselProps) {
  return <Slider {...settings}>{children}</Slider>
}
