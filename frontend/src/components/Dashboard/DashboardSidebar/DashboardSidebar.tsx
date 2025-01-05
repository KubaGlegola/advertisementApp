import { Sidebar, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarMenu className="py-4 px-3">
        <SidebarMenuItem>
          <Link href="/dashboard/categories">Categories</Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/dashboard/categories">Categories</Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </Sidebar>
  );
}
