"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  return (
    <form className="flex gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
      <Input type="email" placeholder="Enter your email" className="flex-1" />
      <Button>Subscribe</Button>
    </form>
  );
}
