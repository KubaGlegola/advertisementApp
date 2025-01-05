import { CustomSidebarTrigger } from "@/components/Dashboard/DashboardSidebar/CustomSidebarTrigger";
import { DashboardSidebar } from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="px-8 py-4 w-full">
        <div className="w-full flex justify-end md:justify-start">
          <CustomSidebarTrigger />
        </div>
        <div className="mt-8">{children}</div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
