// import React from 'react'

// const mockGraphData = [
//     { month: 'Jan', revenue: 15000, sales: 1200 },
//     { month: 'Feb', revenue: 22000, sales: 1550 },
//     { month: 'Mar', revenue: 18000, sales: 1300 },
//     { month: 'Apr', revenue: 25000, sales: 1700 },
//     { month: 'May', revenue: 30000, sales: 1900 },
//     { month: 'Jun', revenue: 35000, sales: 2200 },
//     { month: 'Jul', revenue: 45000, sales: 2350 },
// ];

// export default function SalesGraph({ data }) {
//     const maxRevenue = Math.max(...mockGraphData.map(d => d.revenue));

//     return (
//         <div className="rounded-xl border p-6 bg-white dark:bg-gray-800 shadow-lg">
//             <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Revenue Trends</h2>
//             <div className="h-64 flex items-end space-x-2 p-2">
//                 {mockGraphData.map((item, index) => {
//                     const height = (item.revenue / maxRevenue) * 1000;
//                     return (
//                         <div key={index} className="flex flex-col items-center flex-grow group">
//                             <div
//                                 className="w-full bg-pink-500/80 dark:bg-pink-400/80 rounded-t-lg transition-all duration-500 relative"
//                                 style={{ height: `${height}%`, minHeight: '5px' }}
//                             >
//                                 <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 p-1 text-xs text-white bg-gray-800 dark:bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     ${(item.revenue / 1000).toFixed(1)}K
//                                 </div>
//                             </div>
//                             <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">{item.month}</span>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
    { month: "January", desktop: 1860, mobile: 800 },
    { month: "February", desktop: 3050, mobile: 2000 },
    { month: "March", desktop: 2370, mobile: 1200 },
    { month: "April", desktop: 730, mobile: 1900 },
    { month: "May", desktop: 2090, mobile: 1300 },
    { month: "June", desktop: 2140, mobile: 1400 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
}

export default function SalesGraph({ data }) {
    return (
        <Card className={"shadow-lg rounded-xl border bg-gray-100 dark:bg-gray-800"}>
            <CardHeader>
                <CardTitle>Visitors</CardTitle>
                <CardDescription>January - June 2025</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
