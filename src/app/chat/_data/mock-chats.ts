import type { Chat } from "@/components/chat/ChatList";

const messages = [
  "Hey, how are you?",
  "Can we meet tomorrow?",
  "Did you see the latest update?",
  "Thanks for your help!",
  "Let's catch up soon!",
] as const;

const timestamps = [
  "just now",
  "5m ago",
  "10m ago",
  "1h ago",
  "2h ago",
  "yesterday",
] as const;

export function createMockChats(): Chat[] {
  return Array.from({ length: 100 }, (_, i) => ({
    id: `chat-${i + 1}`,
    name: `User ${i + 1}`,
    lastMessage: messages[i % messages.length],
    timestamp: timestamps[i % timestamps.length],
    unread: i % 3 === 0 ? (i % 5) + 1 : undefined,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    isOnline: i % 3 === 0,
  }));
}
