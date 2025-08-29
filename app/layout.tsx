import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./Providers"
import { Suspense } from "react"
import ErrorBoundary from './components/ErrorBoundary'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohit Negi",
  description: "Personal portfolio of Mohit N., showcasing projects and skills.",
  icons: {
    icon: '/pfp.png',
    shortcut: '/pfp.png',
    apple: '/pfp.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>}>
            <Providers>
              {children}
            </Providers>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  )
}
