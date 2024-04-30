import { ReactNode } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface CarouselProps {
  settings: Settings
  afterChange?: (indexSlide: number) => void
  beforeChange?: (indexSlide: number) => void
  children: ReactNode
}

export default function Carousel({
  settings,
  children,
  afterChange,
  beforeChange,
}: CarouselProps) {
  return (
    <Slider {...settings} beforeChange={beforeChange} afterChange={afterChange}>
      {children}
    </Slider>
  )
}
