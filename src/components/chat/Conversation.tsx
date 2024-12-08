import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  isMe: boolean;
}

interface ConversationProps {
  messages: Message[];
}

export function Conversation({ messages }: ConversationProps) {
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-4 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 max-w-[80%]",
              message.isMe ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={message.sender.avatar} />
              <AvatarFallback>{message.sender.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <div
                className={cn(
                  "rounded-lg p-3",
                  message.isMe
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
              <span className="text-xs text-muted-foreground">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
