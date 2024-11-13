'use client'

import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { useIsMobile } from '../../hooks/use-mobile'
import type { FC, ReactNode } from 'react'
import { LayoutLeft } from './_components/layout-left'

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile()
  return (
    <div className="relative grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">

      <div className="cols-span-1 gap-8">
        
      <Link
        href="/"
        className="absolute left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
      >
        <Icons.logo className="mr-2 size-6" aria-hidden="true" />
        <span>{siteConfig.name}</span>
      </Link>
        <div className="flex px-4 h-full  items-center justify-center">
          {children}
        </div>
      </div>
        {!isMobile && (
          <div className="cols-span-1">
            <LayoutLeft />
          </div>
        )}
    </div>
  )
}
export default AuthLayout
