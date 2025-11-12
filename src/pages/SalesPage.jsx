import { useEffect, useState } from "react";
import { fetchDashboardData } from "../services/api.js";
import { ShoppingCart } from "lucide-react";

export default function SalesPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchDashboardData().then((data) => {
      setOrders(data.carts || []);
    });
  }, []);

  return (
    <div
      className="
        max-w-5xl mx-auto p-8 
        bg-white/60 dark:bg-gray-900/40 
        backdrop-blur-md 
        border border-gray-200/40 dark:border-gray-700/40 
        rounded-3xl 
        shadow-sm 
        transition-all duration-500
      "
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <div
          className="
            w-10 h-10 flex items-center justify-center 
            rounded-full 
            bg-blue-100 dark:bg-blue-900/40 
            text-blue-600 dark:text-blue-400
          "
        >
          <ShoppingCart size={20} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Bestellungen</h2>
      </div>

      {/* Tabelle */}
      <div className="overflow-x-auto">
        <table
          className="
            w-full text-left border-collapse 
            text-gray-800 dark:text-gray-200
          "
        >
          <thead>
            <tr
              className="
                border-b border-gray-300 dark:border-gray-700
                text-gray-600 dark:text-gray-400
                text-sm uppercase tracking-wider
              "
            >
              <th className="py-3 px-4">Bestell-ID</th>
              <th className="py-3 px-4">Benutzer-ID</th>
              <th className="py-3 px-4 text-right">Gesamtbetrag</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  className="py-6 text-center text-gray-500 dark:text-gray-400"
                >
                  Keine Bestellungen vorhanden.
                </td>
              </tr>
            ) : (
              orders.map(({ id, userId, total }) => (
                <tr
                  key={id}
                  className="
                    border-b border-gray-200 dark:border-gray-800 
                    hover:bg-blue-50/50 dark:hover:bg-gray-800/60
                    transition-all duration-200
                  "
                >
                  <td className="py-3 px-4 font-medium">{id}</td>
                  <td className="py-3 px-4">{userId}</td>
                  <td className="py-3 px-4 text-right font-semibold text-blue-600 dark:text-blue-400">
                    ${total.toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
