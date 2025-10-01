import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

export default function SettingsPage() {
  const { darkMode, setDarkMode } = useDarkMode(); // globaler Zustand
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Änderungen gespeichert!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white border rounded-2xl border-gray-600 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Einstellungen</h2>

      {/* Dark/Light Mode */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Darstellung</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span>Dark Mode aktivieren</span>
        </label>
      </section>

      {/* Benachrichtigungen */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Benachrichtigungen</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span>E-Mail Benachrichtigungen erhalten</span>
        </label>
      </section>

      {/* Profil */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Profil</h3>
        <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-400 dark:bg-gray-800 dark:border-gray-600"
              placeholder="Max Mustermann"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">E-Mail</label>
            <input
              type="email"
              className="w-full p-2 rounded border border-gray-400 dark:bg-gray-800 dark:border-gray-600"
              placeholder="max@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Altes Passwort</label>
            <input
              type="password"
              className="w-full p-2 rounded border border-gray-400 dark:bg-gray-800 dark:border-gray-600"
              placeholder="********"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Neues Passwort</label>
            <input
              type="password"
              className="w-full p-2 rounded border border-gray-400 dark:bg-gray-800 dark:border-gray-600"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 rounded border border-gray-800 text-white px-4 py-2 hover:bg-gray-600 transition"
          >
            Speichern
          </button>
        </form>
      </section>
    </div>
  );
}
