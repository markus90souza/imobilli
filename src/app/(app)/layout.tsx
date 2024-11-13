import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import type { FC, ReactNode } from 'react'
import { AppSidebar } from './dashboard/_components/app-siderbar'

type DashboardLayoutProps = {
  children: ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
