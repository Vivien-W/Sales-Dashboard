import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const pieData = [
  { name: "Direktverkauf", value: 400 },
  { name: "Online-Shop", value: 300 },
  { name: "Partner", value: 300 },
  { name: "Sonstige", value: 200 },
];

// Harmonische, leicht abgestufte Palette (hell im Lightmode, sanft leuchtend im Darkmode)
const LIGHT_COLORS = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"]; // blue, green, violet, amber
const DARK_COLORS = ["#60a5fa", "#34d399", "#a78bfa", "#fbbf24"]; // softer & brighter for dark bg

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
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
      className="drop-shadow"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function VertriebskanäleChart() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

  return (
    <div
      className="
        bg-white/60 dark:bg-gray-900/40 
        backdrop-blur-md 
        border border-gray-200/50 dark:border-gray-700/50 
        p-5 rounded-2xl shadow-sm hover:shadow-md transition
      "
    >
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Vertriebskanäle
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={85}
            innerRadius={45}
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1f2937" : "#f9fafb",
              border: "none",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            itemStyle={{
              color: isDark ? "#f9fafb" : "#1f2937",
              fontWeight: 500,
              fontSize: 14,
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{
              color: isDark ? "#d1d5db" : "#374151",
              fontSize: 13,
              marginTop: 10,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
