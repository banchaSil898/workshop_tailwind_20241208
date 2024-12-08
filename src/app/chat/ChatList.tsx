import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  avatar?: string;
  isOnline?: boolean;
}

interface ChatListProps {
  chats: Chat[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export function ChatList({ chats, selectedId, onSelect }: ChatListProps) {
  const [sidebar, setSidebar] = React.useState<HTMLElement | null>(null);
  React.useEffect(() => {
    setSidebar(document.getElementById("chat-list-sidebar"));
  }, []);
  return (
    <ScrollArea className="h-full">
      <div className="jun-sidebarContainer jun-sidebarMenu flex flex-col gap-1 p-2 min-w-0">
        {chats.map((chat) => (
          <Tooltip key={chat.id}>
            <TooltipTrigger asChild>
              <button
                className={cn(
                  "jun-sidebarMenuButton jun-sidebarMenuButton-spacing-3",
                  "flex items-center gap-3 w-full p-3 rounded-lg text-left",
                  "hover:bg-accent",
                  chat.id === selectedId && "bg-accent"
                )}
              >
                <div className="relative">
                  <Avatar className="jun-sidebarIcon h-[42px] w-[42px]">
                    <AvatarImage src={chat.avatar} alt={chat.name} />
                    <AvatarFallback>{chat.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  {chat.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <div className="jun-sidebarText flex-1 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{chat.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {chat.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground truncate">
                      {chat.lastMessage}
                    </span>
                    {chat.unread && (
                      <Badge variant="default" className="ml-auto">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              container={sidebar}
              className="jun-sidebarTooltip"
            >
              {chat.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </ScrollArea>
  );
}
