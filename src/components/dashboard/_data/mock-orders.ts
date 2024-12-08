export interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    avatar?: string;
  };
  status: "pending" | "processing" | "completed" | "cancelled";
  items: number;
  total: number;
  paymentMethod: "credit_card" | "paypal" | "bank_transfer";
  createdAt: string;
}

const statuses = ["pending", "processing", "completed", "cancelled"] as const;
const paymentMethods = ["credit_card", "paypal", "bank_transfer"] as const;

// Predefined totals for consistent data
const orderTotals = [
  99.99, 149.99, 199.99, 299.99, 399.99, 249.99, 179.99, 159.99, 449.99, 599.99,
];

// Predefined item counts
const itemCounts = [1, 2, 3, 4, 5];

export function createMockOrders(): Order[] {
  return Array.from({ length: 100 }, (_, i) => ({
    id: `order-${i + 1}`,
    orderNumber: `ORD-${String(i + 1).padStart(5, "0")}`,
    customer: {
      name: `Customer ${i + 1}`,
      email: `customer${i + 1}@example.com`,
      avatar: `https://ui-avatars.com/api/?name=Customer+${
        i + 1
      }&background=e5e7eb&color=374151`,
    },
    status: statuses[i % statuses.length],
    items: itemCounts[i % itemCounts.length],
    total: orderTotals[i % orderTotals.length],
    paymentMethod: paymentMethods[i % paymentMethods.length],
    createdAt: new Date(2024, 0, 1 + Math.floor(i / 4)).toISOString(), // 4 orders per day starting from Jan 1, 2024
  }));
}
