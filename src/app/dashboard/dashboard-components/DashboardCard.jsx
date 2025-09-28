import React from 'react'

export default function DashboardCard({ title, value, description, icon: Icon, colorClass }) {
  return (
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
  )
}
