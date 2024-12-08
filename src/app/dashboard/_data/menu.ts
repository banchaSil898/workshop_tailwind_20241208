import {
  BarChart2,
  Calendar,
  Database,
  FileText,
  Home,
  Mail,
  Users,
} from "lucide-react";

export const menuGroups = [
  {
    label: "Overview",
    items: [
      {
        icon: Home,
        label: "Dashboard",
        menus: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      { icon: BarChart2, label: "Analytics" },
      { icon: FileText, label: "Reports" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { icon: Mail, label: "Inbox" },
      { icon: Calendar, label: "Calendar" },
      { icon: Database, label: "Projects" },
      { icon: Users, label: "Team" },
    ],
  },
];
