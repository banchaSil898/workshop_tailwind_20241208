"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { triggerEdgeDrawer } from "tailwindcss-jun-layout";

export default function NavTrigger() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="jun-edgeDrawerTrigger -ml-2 mr-2"
      onClick={() => triggerEdgeDrawer()}
    >
      <MenuIcon />
    </Button>
  );
}
