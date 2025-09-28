// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "../(site)/api/auth/[...nextauth]/route";

// export default async function DashboardPage() {
//   const session = await getServerSession(authOptions);

//   // if (!session) {
//   //   redirect("/auth/signin"); // if not logged in, send to login page
//   // }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Welcome, {session.user.name} 🎉</h1>
//       <p>Email: {session.user.email}</p>

//     </div>
//   );
// }

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingCart, DollarSign, Users, TrendingUp, Sun, Moon, Package, Truck, CheckCircle } from 'lucide-react';
import DashboardCard from './dashboard-components/DashboardCard';
import SalesGraph from './dashboard-components/SalesGraph';
import RecentOrders from './dashboard-components/RecentOrders';

// --- MOCK DATA STRUCTURES ---
const mockKpiData = {
  totalRevenue: 45231.89,
  totalSales: 2350,
  newCustomers: 125,
  conversionRate: '1.8%',
};

const mockGraphData = [
  { month: 'Jan', revenue: 15000, sales: 1200 },
  { month: 'Feb', revenue: 22000, sales: 1550 },
  { month: 'Mar', revenue: 18000, sales: 1300 },
  { month: 'Apr', revenue: 25000, sales: 1700 },
  { month: 'May', revenue: 30000, sales: 1900 },
  { month: 'Jun', revenue: 35000, sales: 2200 },
  { month: 'Jul', revenue: 45000, sales: 2350 },
];

const mockOrdersData = [
  { id: '#1008', customer: 'Anya Taylor', status: 'Processing', amount: 89.50, date: '2025-09-25' },
  { id: '#1007', customer: 'Bella Hadid', status: 'Shipped', amount: 45.99, date: '2025-09-24' },
  { id: '#1006', customer: 'Chloe Grace', status: 'Delivered', amount: 124.00, date: '2025-09-23' },
  { id: '#1005', customer: 'Diana Prince', status: 'Processing', amount: 29.99, date: '2025-09-23' },
  { id: '#1004', customer: 'Emma Watson', status: 'Delivered', amount: 50.00, date: '2025-09-22' },
];

// --- SHADCN-LIKE COMPONENTS ---

// Card Component
const Card = ({ title, value, description, icon: Icon, colorClass }) => (
  <div
    className="
      flex flex-col space-y-3 rounded-xl border p-5 shadow-lg transition-all duration-300 
      bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700
      hover:shadow-2xl hover:scale-[1.02]
    "
  >
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <Icon className={`h-5 w-5 ${colorClass}`} />
    </div>
    <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">{value}</div>
    <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

// Sales Graph Placeholder (using simple div bars)


// Recent Orders Table


// --- MAIN DASHBOARD COMPONENT ---

const kpiDefinitions = [
  {
    title: 'Total Revenue',
    key: 'totalRevenue',
    icon: DollarSign,
    format: (val) => `$${val.toLocaleString()}`,
    description: '+20.1% from last month',
    colorClass: 'text-pink-600 dark:text-pink-400'
  },
  {
    title: 'Total Sales',
    key: 'totalSales',
    icon: ShoppingCart,
    format: (val) => val.toLocaleString(),
    description: '+15.5% from last month',
    colorClass: 'text-purple-600 dark:text-purple-400'
  },
  {
    title: 'New Customers',
    key: 'newCustomers',
    icon: Users,
    format: (val) => val.toLocaleString(),
    description: '+5% this week',
    colorClass: 'text-indigo-600 dark:text-indigo-400'
  },
  {
    title: 'Conversion Rate',
    key: 'conversionRate',
    icon: TrendingUp,
    format: (val) => val,
    description: 'Target: 2.0%',
    colorClass: 'text-cyan-600 dark:text-cyan-400'
  },
];


export default function Dashboard() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [data, setData] = useState({
    kpis: mockKpiData,
    graph: mockGraphData,
    orders: mockOrdersData,
  });

  // Effect to apply the dark class to HTML root
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className="
        min-h-screen px-8 
        bg-gray-50 dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 
        transition-colors duration-300
      "
    >
      {/* HEADER AND THEME SWITCHER */}
      <header className="flex justify-between items-center mb-6 border-b pb-4 border-pink-200 dark:border-gray-700">
        <div>
          <h1 className="text-3xl font-extrabold text-pink-700 dark:text-pink-400">
            AuraBeaute Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Overview of your E-commerce Makeup Shop performance.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-gray-700 hover:scale-105 transition-transform"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </button>
      </header>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* 1. KPI Cards */}
        {kpiDefinitions.map(kpi => (
          <DashboardCard
            key={kpi.key}
            title={kpi.title}
            value={kpi.format(data.kpis[kpi.key])}
            description={kpi.description}
            icon={kpi.icon}
            colorClass={kpi.colorClass}
          />
        ))}

        {/* 2. Sales Graph (Takes 2 Columns on Desktop) */}
        <div className="lg:col-span-2">
          <SalesGraph data={data.graph} />
        </div>

        {/* 3. Recent Orders Table (Takes Full Width) */}
        <RecentOrders data={data.orders} />
      </div>

      {/* FOOTER - Responsiveness Indicator */}
      <footer className="mt-8 text-center text-xs text-gray-400 dark:text-gray-600">
        <div className="block sm:hidden">Viewing on: Mobile (xs)</div>
        <div className="hidden sm:block md:hidden">Viewing on: Tablet (sm)</div>
        <div className="hidden md:block lg:hidden">Viewing on: Large Tablet/Small Desktop (md)</div>
        <div className="hidden lg:block">Viewing on: Desktop (lg+)</div>
      </footer>
    </div>
  );
}
