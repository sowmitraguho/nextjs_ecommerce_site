import React from 'react'

export default function RecentOrders({ data })  {
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300';
      case 'Processing':
        return 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300';
    }
  };

  return (
    <div className="rounded-xl border p-6 bg-white dark:bg-gray-800 shadow-lg col-span-1 lg:col-span-2 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Recent Orders</h2>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            <th className="py-3 px-4">Order ID</th>
            <th className="py-3 px-4">Customer</th>
            <th className="py-3 px-4 hidden sm:table-cell">Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-800 dark:text-gray-100">
          {data.map(order => (
            <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <td className="py-3 px-4 text-sm font-medium">{order.id}</td>
              <td className="py-3 px-4 text-sm">{order.customer}</td>
              <td className="py-3 px-4 text-sm hidden sm:table-cell">{order.date}</td>
              <td className="py-3 px-4">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-right font-semibold">${order.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
