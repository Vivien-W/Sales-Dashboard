import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

export default function UmsatzChart() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const lineData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mrz", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "Mai", sales: 1890 },
  ];

  const lineColor = isDark ? "#60a5fa" : "#2563eb"; // blue-400 / blue-600
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
        Umsatz
      </h2>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={lineData}>
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
            cursor={{
              stroke: isDark ? "#60a5fa33" : "#2563eb22",
              strokeWidth: 2,
            }}
            contentStyle={{
              backgroundColor: isDark ? "#1f2937" : "#f9fafb", // gray-800 / gray-50
              border: "none",
              borderRadius: "0.75rem",
              color: isDark ? "#f3f4f6" : "#111827",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke={lineColor}
            strokeWidth={3}
            dot={{ r: 4, fill: lineColor }}
            activeDot={{ r: 6, fill: lineColor }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
