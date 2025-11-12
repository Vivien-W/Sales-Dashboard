import { useEffect, useState } from "react";
import { fetchDashboardData } from "../services/api.js";
import { User } from "lucide-react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchDashboardData().then((data) => {
      setCustomers(data.users || []);
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
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Kunden</h2>

      {customers.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Keine Kundendaten gefunden.
        </p>
      ) : (
        <ul className="space-y-4">
          {customers.map(({ id, firstName, lastName, email }) => (
            <li
              key={id}
              className="
                flex items-center space-x-4 
                p-4 
                rounded-2xl 
                bg-white/70 dark:bg-gray-800/60 
                border border-gray-200/50 dark:border-gray-700/50 
                hover:shadow-md hover:scale-[1.01]
                transition-all duration-300
              "
            >
              <div
                className="
                  w-12 h-12 flex items-center justify-center 
                  rounded-full 
                  bg-blue-100 dark:bg-blue-900/40
                  text-blue-600 dark:text-blue-400
                "
              >
                <User size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {firstName} {lastName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {email}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
