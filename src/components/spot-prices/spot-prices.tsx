"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { useSpotPrices } from "./useSpotPrices";

// Chart configuration for shadcn charts
const chartConfig = {
  sek: {
    label: "öre/kWh",
    // You can map to a CSS variable or keep a hard color. Using CSS var is recommended.
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const now = new Date();

export function SpotPrices() {
  const { data = [], isError, isLoading } = useSpotPrices(now);

  // Transform to the minimal shape the chart needs
  const chartData = data
    .filter((d) => {
      const date = new Date(d.time_start);
      return date.getMinutes() === 0; // Keep only full hours
    })
    .map((d) => ({
      time: d.time_start,
      sek: d.SEK_per_kWh * 100,
    }));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Card className="max-w-[540px] h-[370px] border-0">
      <CardHeader className="border-b">
        <div className="flex flex-1 flex-col justify-center gap-1">
          <CardTitle>Dagens timpris på el</CardTitle>
          <CardDescription>
            Spotpriser {now.toLocaleDateString("sv-SE")}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grow-1 flex items-center">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 0, right: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              minTickGap={5}
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              interval={0}
              // angle={-45}
              tickFormatter={(value: string) => {
                const date = new Date(value);
                return date.toLocaleTimeString("sv-SE", {
                  hour: "2-digit",
                });
              }}
            />
            <YAxis
              minTickGap={5}
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              width={30}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  // Use the x-value (time) as the label in the tooltip
                  labelFormatter={(value) =>
                    new Date(String(value)).toLocaleString("sv-SE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  }
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="sek" fill="var(--color-sek)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
