'use client'

import { ReactNode } from 'react'
import Slider, { Settings } from 'react-slick'
import '@/styles/slick.css'
import '@/styles/slick-theme.css'

interface CarouselProps {
  settings: Settings
  children: ReactNode
}

export default function HomeCarousel({ settings, children }: CarouselProps) {
  return <Slider {...settings}>{children}</Slider>
}
