'use client';

import { ThemeProvider } from "@/components/theme-provider"
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function ScrollRestoration() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // Save scroll position when leaving the page
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // Restore scroll position when component mounts
    const savedPosition = sessionStorage.getItem('scrollPosition')
    if (savedPosition !== null) {
      window.scrollTo(0, parseInt(savedPosition))
      sessionStorage.removeItem('scrollPosition')
    }
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [pathname, searchParams])
  
  return null
}

function ScrollRestorationWrapper() {
  return (
    <Suspense>
      <ScrollRestoration />
    </Suspense>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ScrollRestorationWrapper />
      {children}
    </ThemeProvider>
  )
}
