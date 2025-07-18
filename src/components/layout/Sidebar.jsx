

import { Home, BarChart, Settings, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ProfileImage from "../../assets/profile-image.png";

const navItems = [
  { name: 'Dashboard', icon: <Home size={20} />, path: '/' },
  { name: 'Verkauf', icon: <BarChart size={20} />, path: '/sales' },
  { name: 'Kunden', icon: <Users size={20} />, path: '/customers' },
  { name: 'Einstellungen', icon: <Settings size={20} />, path: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-500 text-white dark:bg-gray-800 w-64 p-6 hidden md:block border-r-2 border-white">
      <img
          src={ProfileImage}
          alt="Profilbild"
          className="w-10 h-10 rounded-full object-cover"
        />
      <h2 className="text-2xl font-bold mb-8">Team B</h2>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-300 transition ${
                isActive ? 'bg-gray-400 font-semibold' : ''
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
