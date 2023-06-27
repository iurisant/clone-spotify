import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify - Web Player: Music for everyone',
  description: 'Spotify - Web Player: Music for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <body
        className='bg-spotify-1 text-white overflow-y-auto flex flex-col items-stretch w-full'
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
