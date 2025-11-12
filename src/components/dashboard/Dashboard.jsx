import { useEffect, useState } from "react";
import KPIBox from "./KPIBox.jsx";
import UmsatzChart from "../charts/MonthlyRevenueChart.jsx";
import UmsatzentwicklungChart from "../charts/RevenueTrendChart.jsx";
import SalesChart from "../charts/SalesChart.jsx";
import VertriebskanäleChart from "../charts/SalesByChannelChart.jsx";
import { fetchDashboardData } from "../../services/api.js";

export default function Dashboard() {
  const [data, setData] = useState({
    products: 0,
    customers: 0,
    orders: 0,
    sales: 0,
  });

  useEffect(() => {
    fetchDashboardData().then(setData);
  }, []);

  return (
    <div className="space-y-8">
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPIBox title="Produkte" value={data.products} />
        <KPIBox title="Kunden" value={data.customers} />
        <KPIBox title="Bestellungen" value={data.orders} />
        <KPIBox title="Umsatz" value={`$${data.sales}`} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Umsatz (Demo)</h2>
          <UmsatzChart />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Umsatzentwicklung (Demo)
          </h2>
          <UmsatzentwicklungChart />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Sales nach Kategorien</h2>
          <SalesChart />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            Sales nach Vertriebskanälen
          </h2>
          <VertriebskanäleChart />
        </div>
      </div>
    </div>
  );
}
