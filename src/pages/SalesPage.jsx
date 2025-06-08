import { useEffect, useState } from 'react';
import { fetchDashboardData } from '../services/api.js';

export default function SalesPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchDashboardData().then((data) => {
      setOrders(data.carts || []);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bestellungen</h2>
      <table className="w-full mt-4 text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="py-2">Bestell-ID</th>
            <th className="py-2">Benutzer-ID</th>
            <th className="py-2">Gesamtbetrag</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(({ id, userId, total }) => (
            <tr key={id} className="border-b border-gray-700 hover:bg-indigo-800">
              <td className="py-2">{id}</td>
              <td className="py-2">{userId}</td>
              <td className="py-2">${total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
