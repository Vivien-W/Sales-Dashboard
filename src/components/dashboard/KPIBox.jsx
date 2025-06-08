export default function KPIBox({ title, value }) {
  return (
    <div className="bg-cyan-500 dark:bg-cyan-600 p-4 rounded-2xl shadow text-center hover:scale-[1.02] transition-transform">
      <h3 className="text-sm text-cyan-100">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
