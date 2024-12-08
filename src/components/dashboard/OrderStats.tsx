import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orderStats } from "./_data/mock-stats";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function OrderStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {orderStats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <div className="mt-4 flex items-center gap-2">
              <div
                className={cn(
                  "flex items-center gap-0.5 text-xs font-medium",
                  stat.trend.direction === "up"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                )}
              >
                {stat.trend.direction === "up" ? (
                  <ArrowUpIcon className="h-3 w-3" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3" />
                )}
                {stat.trend.value}%
              </div>
              <span className="text-xs text-muted-foreground">
                {stat.trend.label}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
