import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function UmsatzentwicklungChart() {
  const lineData = [
    { name: '2021', sales: 40000 },
    { name: '2022', sales: 33200 },
    { name: '2023', sales: 29000 },
    { name: '2024', sales: 45080 },
    { name: '2025', sales: 18900 },
  ];

  return (
    <div className="bg-cyan-200 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg text-red-500 mb-2">Umsatzentwicklung</h2>
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
