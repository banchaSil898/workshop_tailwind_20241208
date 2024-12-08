"use client";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import { triggerEdgeDrawerRight } from "tailwindcss-jun-layout";

export default function TocTrigger() {
  return (
    <Button
      className="jun-edgeDrawerTriggerR fixed bottom-[1rem] right-[1rem]"
      variant="secondary"
      size="icon"
      onClick={() => triggerEdgeDrawerRight()}
    >
      <List />
    </Button>
  );
}
