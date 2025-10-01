import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function UmsatzChart() {
  const lineData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mrz", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "Mai", sales: 1890 },
  ];

  return (
    <div className="bg-cyan-200 dark:bg-cyan-100 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg text-red-500 mb-2">Umsatz</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={lineData}>
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
          <CartesianGrid stroke="#1e3a8a" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
