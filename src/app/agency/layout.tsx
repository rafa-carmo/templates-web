import { ReactNode } from 'react'

export default function AgencyLayout({ children }: { children: ReactNode }) {
  return <body className="w-screen overflow-x-hidden bg-white">{children}</body>
}
