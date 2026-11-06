import { Sidebar, SidebarFooter } from "@myafrimall/ui/components/sidebar";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@myafrimall/ui/components/sidebar"
import * as React from "react"
import { ChevronRight, LayoutDashboard, Ship, Globe, Bell, Wallet, LocateFixed, BadgeDollarSign,  HandHelping, LogOut,  type LucideIcon, Icon,  } from "lucide-react"
import User from "../Images/user.jpg"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@myafrimall/ui/components/avatar"
import { Button } from "@myafrimall/ui/components/button";

const links: {title: string, icon: LucideIcon}[] = [
    {title: 'Dashboard', icon: LayoutDashboard},
    {title: 'Shipments', icon: Ship},
    {title: 'Our Services', icon: Globe},
    {title: 'Notifications', icon: Bell},
    {title: 'Wallet', icon: Wallet},
    {title: 'Addresses', icon: LocateFixed},
    {title: 'Invite & Earn', icon: BadgeDollarSign},
    {title: 'Help Center', icon: HandHelping}
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className='border-b'>
               <div className='my-10' />
            </SidebarHeader>
            <SidebarContent>
          <SidebarGroup >
            <SidebarGroupContent>
              <SidebarMenu className="gap-6 p-5">
        {links.map((link) => (
            <SidebarMenuItem key={link.title}>
                <SidebarMenuButton>
                <link.icon />
                <span>{link.title}</span></SidebarMenuButton>
            </SidebarMenuItem>
        ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                <div className="flex items-center gap-2 p-8">
                    <Avatar>
                        <AvatarImage 
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="grayscale"
                        />
                         <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                    <h5>Firstname</h5>
                    <h5>Firstname</h5></div>
                </div></SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton className="px-6 py-7">
                        <LogOut /> Logout
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarFooter>
      <SidebarRail />
        </Sidebar>
    )
}