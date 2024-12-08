import type { Message } from "@/components/chat/Conversation";

const messageContents = [
  "Hey there! How's it going?",
  "I've been working on that project we discussed.",
  "Did you see the latest updates?",
  "Can we schedule a meeting for tomorrow?",
  "Thanks for your help earlier!",
  "The presentation went really well!",
  "I'll send you the documents soon.",
  "Have a great weekend!",
  "Let me know when you're free to chat.",
  "That sounds like a great idea!",
] as const;

export function createMockMessages(): Message[] {
  return Array.from({ length: 100 }, (_, i) => {
    const isMe = i % 2 === 0;
    const minutesAgo = i * 3;
    const timestamp = new Date(
      Date.now() - minutesAgo * 60000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      id: `msg-${i + 1}`,
      content: messageContents[i % messageContents.length],
      timestamp,
      sender: {
        id: isMe ? "me" : "other",
        name: isMe ? "Me" : "John Doe",
        avatar: isMe
          ? undefined
          : `https://api.dicebear.com/7.x/avataaars/svg?seed=john`,
      },
      isMe,
    };
  });
}
