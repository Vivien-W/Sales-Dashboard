import { Home, BarChart, Settings, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import ProfileImage from "../../assets/profile-image.png";

const navItems = [
  { name: "Dashboard", icon: <Home size={20} />, path: "/" },
  { name: "Verkauf", icon: <BarChart size={20} />, path: "/sales" },
  { name: "Kunden", icon: <Users size={20} />, path: "/customers" },
  { name: "Einstellungen", icon: <Settings size={20} />, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside
      className="
        hidden md:flex flex-col justify-between
        w-64 p-6 
        bg-white/60 dark:bg-gray-900/40 
        backdrop-blur-md
        border-r border-gray-200/40 dark:border-gray-700/40
        shadow-sm
        transition-all duration-500
      "
    >
      {/* Top: Profil + Navigation */}
      <div>
        <div className="flex items-center space-x-3 mb-10">
          <img
            src={ProfileImage}
            alt="Profilbild"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/50 dark:ring-gray-700/50"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Team B
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sales Team
            </p>
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                  flex items-center space-x-3 px-3 py-2 rounded-xl
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800/60"
                  }
                `
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom: Footer / Version */}
      <div className="mt-10 text-xs text-gray-500 dark:text-gray-500">
        © 2025 Team B
      </div>
    </aside>
  );
}
