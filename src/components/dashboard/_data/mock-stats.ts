export interface OrderStats {
  label: string;
  value: string;
  description: string;
  trend: {
    value: number;
    label: string;
    direction: "up" | "down";
  };
}

export const orderStats: OrderStats[] = [
  {
    label: "Total Revenue",
    value: "$45,231.89",
    description: "Monthly revenue",
    trend: {
      value: 20.1,
      label: "from last month",
      direction: "up",
    },
  },
  {
    label: "Active Orders",
    value: "56",
    description: "Pending & processing",
    trend: {
      value: 5.4,
      label: "from last week",
      direction: "down",
    },
  },
  {
    label: "Completed Orders",
    value: "2,345",
    description: "Last 6 months",
    trend: {
      value: 12.5,
      label: "from last quarter",
      direction: "up",
    },
  },
];
