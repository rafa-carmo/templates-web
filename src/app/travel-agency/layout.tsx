import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Travel Agency Landing Page Example',
  description: 'A simple landing page from example',
}

export default function TravelLayout({ children }: { children: ReactNode }) {
  return (
    <body className="overflow-x-hidden bg-zinc-900 max-w-[99vw] md:w-screen">
      {children}
    </body>
  )
}
