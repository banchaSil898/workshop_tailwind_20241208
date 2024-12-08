interface SharedMedia {
  images: string[];
  files: { name: string; size: string }[];
}

interface Participant {
  name: string;
  avatar?: string;
  status?: string;
}

export interface ChatSettings {
  participant: Participant;
  sharedMedia: SharedMedia;
}

export function createMockSettings(): ChatSettings {
  return {
    participant: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      status: "Last seen 2 hours ago",
    },
    sharedMedia: {
      images: [
        "https://picsum.photos/seed/1/200",
        "https://picsum.photos/seed/2/200",
        "https://picsum.photos/seed/3/200",
        "https://picsum.photos/seed/4/200",
        "https://picsum.photos/seed/5/200",
        "https://picsum.photos/seed/6/200",
      ],
      files: [
        {
          name: "Project_Brief.pdf",
          size: "2.4 MB",
        },
        {
          name: "Meeting_Notes.docx",
          size: "842 KB",
        },
        {
          name: "Presentation.pptx",
          size: "4.1 MB",
        },
        {
          name: "Budget_2024.xlsx",
          size: "1.2 MB",
        },
        {
          name: "Design_Assets.zip",
          size: "15.8 MB",
        },
      ],
    },
  };
}
