import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Smile, Image as ImageIcon, Send, Mic } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface InputProps {
  onSend: (message: string) => void;
}

export function Input({ onSend }: InputProps) {
  const [message, setMessage] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSend(message);
        setMessage("");
      }
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-end gap-2">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ImageIcon className="h-5 w-5" />
          </Button>
        </div>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="min-h-[40px] max-h-[200px] flex-1"
          rows={1}
        />
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Smile className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mic className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => {
              if (message.trim()) {
                onSend(message);
                setMessage("");
              }
            }}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
