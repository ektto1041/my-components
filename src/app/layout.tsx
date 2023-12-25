import type { Metadata } from 'next'
import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'

const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'My Components',
  description: 'Components of karpedia',
  authors: { name: 'karpedia' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={ubuntuMono.className}>{children}</body>
    </html>
  )
}
