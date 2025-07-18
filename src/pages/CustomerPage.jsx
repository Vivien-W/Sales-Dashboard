import { useEffect, useState } from 'react';
import { fetchDashboardData } from '../services/api.js';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchDashboardData().then((data) => {
      setCustomers(data.users || []);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kunden</h2>
      <ul className="space-y-3">
        {customers.map(({ id, firstName, lastName, email }) => (
          <li key={id} className="p-3 rounded-lg">
            <p className="font-semibold">{firstName} {lastName}</p>
            <p className="text-sm text-gray-100">{email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
