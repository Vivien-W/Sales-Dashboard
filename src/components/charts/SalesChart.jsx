import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useEffect, useState } from "react";

const barData = [
  { name: "Kategorie A", orders: 400 },
  { name: "Kategorie B", orders: 300 },
  { name: "Katgorie C", orders: 300 },
  { name: "Kategorie D", orders: 200 },
];

export default function SalesChart() {
  const [isDark, setIsDark] = useState(false);

  // check system or saved theme (optional)
  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const barColor = isDark ? "#60a5fa" : "#2563eb"; // Tailwind blue-400 / blue-600
  const gridColor = isDark ? "#374151" : "#e5e7eb"; // gray-700 / gray-200
  const textColor = isDark ? "#d1d5db" : "#374151"; // gray-300 / gray-700

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
        Verkäufe pro Kategorie
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="name"
            stroke={textColor}
            tick={{ fill: textColor, fontSize: 12 }}
            axisLine={{ stroke: gridColor }}
          />
          <YAxis
            stroke={textColor}
            tick={{ fill: textColor, fontSize: 12 }}
            axisLine={{ stroke: gridColor }}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: isDark ? "#1f2937" : "#f9fafb", // gray-800 / gray-50
              border: "none",
              borderRadius: "0.75rem",
              color: isDark ? "#f3f4f6" : "#111827",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <Bar dataKey="orders" fill={barColor} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
