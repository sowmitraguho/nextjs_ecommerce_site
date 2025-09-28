import React from 'react'

const mockGraphData = [
    { month: 'Jan', revenue: 15000, sales: 1200 },
    { month: 'Feb', revenue: 22000, sales: 1550 },
    { month: 'Mar', revenue: 18000, sales: 1300 },
    { month: 'Apr', revenue: 25000, sales: 1700 },
    { month: 'May', revenue: 30000, sales: 1900 },
    { month: 'Jun', revenue: 35000, sales: 2200 },
    { month: 'Jul', revenue: 45000, sales: 2350 },
];

export default function SalesGraph({ data }) {
    const maxRevenue = Math.max(...mockGraphData.map(d => d.revenue));

    return (
        <div className="rounded-xl border p-6 bg-white dark:bg-gray-800 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Revenue Trends</h2>
            <div className="h-64 flex items-end space-x-2 p-2">
                {mockGraphData.map((item, index) => {
                    const height = (item.revenue / maxRevenue) * 1000;
                    return (
                        <div key={index} className="flex flex-col items-center flex-grow group">
                            <div
                                className="w-full bg-pink-500/80 dark:bg-pink-400/80 rounded-t-lg transition-all duration-500 relative"
                                style={{ height: `${height}%`, minHeight: '5px' }}
                            >
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 p-1 text-xs text-white bg-gray-800 dark:bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    ${(item.revenue / 1000).toFixed(1)}K
                                </div>
                            </div>
                            <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">{item.month}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
