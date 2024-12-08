"use client";
import { ChatList } from "@/components/chat/ChatList";
import { Input } from "@/components/chat/Input";
import { createMockChats } from "@/app/chat/_data/mock-chats";
import { createMockMessages } from "@/app/chat/_data/mock-messages";
import { createMockSettings } from "@/app/chat/_data/mock-settings";
import { Conversation } from "@/components/chat/Conversation";
import { ChatSetting } from "@/components/chat/ChatSetting";
import { Button } from "@/components/ui/button";
import { UserPlus, MoreVertical, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { triggerEdgeCollapse } from "tailwindcss-jun-layout";

// Create mock data once
const mockChats = createMockChats();
const mockMessages = createMockMessages();
const mockSettings = createMockSettings();

export default function ChatPage() {
  return (
    <div className="jun-layout jun-layout-standalone">
      <header className="jun-header flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <button className="jun-edgeCollapseTrigger" onClick={(event) => triggerEdgeCollapse({event})}>
            <PanelLeftClose className="jun-edgeUncollapsed-visible"/>
            <PanelLeftOpen className="jun-edgeCollapsed-visible"/>
          </button>
          <h1 className="text-lg font-semibold">Messages</h1>
          <span className="text-sm text-muted-foreground">
            {mockChats.length} conversations
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <UserPlus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <aside className="jun-edgeSidebar 
        jun-edgeSidebar-collapsed-w-[80px]
        sm:jun-edgeSidebar-collapsed-w-[80px]
        jun-edgeSidebar-drawer
        md:jun-edgeSidebar-permanent
        "
      >
        <button className="jun-sidebarRail" onClick={(event) => triggerEdgeCollapse({event})}>
        </button>
        <div className="jun-edgeContent">
          <ChatList
            chats={mockChats}
            onSelect={(id) => console.log("Selected chat:", id)}
          />
        </div>
      </aside>

      <main className="jun-content">
        <Conversation messages={mockMessages} />
      </main>

      <aside className="jun-edgeSidebarR
        jun-edgeSidebarR-collapsed-w-[80px]
        jun-edgeSidebarR-drawer
        md:jun-edgeSidebarR-permanent">
        <div className="jun-edgeContent">
          <ChatSetting
            participant={mockSettings.participant}
            sharedMedia={mockSettings.sharedMedia}
          />
        </div>
      </aside>

      <div className="jun-footer">
        <Input onSend={(message) => console.log("Sent message:", message)} />
      </div>
    </div>
  );
}
