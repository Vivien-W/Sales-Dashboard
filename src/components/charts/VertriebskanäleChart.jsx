import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Direktverkauf', value: 400 },
  { name: 'Online-Shop', value: 300 },
  { name: 'Partner', value: 300 },
  { name: 'Sonstige', value: 200 },
];

const COLORS = ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function VertriebskanäleChart() {
  return (
    <div className="bg-cyan-200 dark:bg-cyan-100 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg text-red-500 mb-2">Vertriebskanäle</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#3b82f6"
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
