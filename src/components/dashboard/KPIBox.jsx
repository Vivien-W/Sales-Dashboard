export default function KPIBox({ title, value }) {
  return (
    <div
      className="
        bg-white/60 dark:bg-gray-900/40 
        backdrop-blur-md 
        border border-gray-200/50 dark:border-gray-700/50 
        p-5 rounded-2xl 
        shadow-sm hover:shadow-md 
        transition-all duration-300 
        text-center
        hover:scale-[1.02]
      "
    >
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
        {title}
      </h3>
      <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-1">
        {value}
      </p>
    </div>
  );
}
