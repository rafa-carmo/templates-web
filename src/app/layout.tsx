import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
  <html lang="pt-BR">
    <head>
      <link rel="icon" href="/icon.png" />
    </head>
    {children}
  </html>
  )
}
