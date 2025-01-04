"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function CustomSidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar}>
      <Menu className="size-8 ml-auto" />
    </button>
  );
}
