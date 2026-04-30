import type { Metadata } from 'next'
import './globals.css'

// export const metadata: Metadata = {
//   title: 'Konkan Mallick — Full Stack Developer',
//   description: 'Full Stack Developer portfolio showcasing projects, skills, and experience',
// }
export const metadata: Metadata = {
  title: 'Konkan Mallick — Full Stack Developer',
  description: 'Full Stack Developer portfolio showcasing projects, skills, and experience',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise">
        {children}
      </body>
    </html>
  )
}