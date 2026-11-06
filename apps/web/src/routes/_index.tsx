import type { Route } from "./+types/signin";
// import { AppSidebar} from "@myafrimall/ui/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@myafrimall/ui/components/sidebar";
import { Separator } from "@myafrimall/ui/components/separator"
import { AppSidebar } from "@/components/sidebar";
import { DashContent } from "@/components/dash-content"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
       <header className="sticky top-0 flex h-24 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger className="-ml-1" />
             <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-full"
          />
          <div>
            <h2 className="font-semibold text-lg">Invite & Earn</h2>
            <p className="text-sm text-muted-foreground">
              Keep track of your addresses, location updates. Edit, Delete, Update and see all<br></br> your saved addresses
            </p>
          </div>
       </header>
       <DashContent />
      </SidebarInset>
    </SidebarProvider>
  )
}
