export default function KPIBox({ title, value }) {
  return (
    <div className="bg-gray-100 dark:bg-blue-500 p-4 rounded-2xl shadow text-center hover:scale-[1.02] transition-transform">
      <h3 className="text-sm text-gray-950">{title}</h3>
      <p className="text-2xl font-semibold text-black dark:text-white">
        {value}
      </p>
    </div>
  );
}
