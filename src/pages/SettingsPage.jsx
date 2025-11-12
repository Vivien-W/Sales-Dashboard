import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

export default function SettingsPage() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Änderungen gespeichert!");
  };

  return (
    <div
      className="
        max-w-3xl mx-auto p-8 
        bg-white/60 dark:bg-gray-900/40 
        backdrop-blur-md 
        border border-gray-200/40 dark:border-gray-700/40 
        rounded-3xl 
        shadow-sm 
        transition-all duration-500
      "
    >
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Einstellungen</h2>

      {/* Darstellung */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Darstellung
        </h3>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="h-5 w-5 accent-blue-500"
          />
          <span>Dark Mode aktivieren</span>
        </label>
      </section>

      {/* Benachrichtigungen */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Benachrichtigungen
        </h3>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="h-5 w-5 accent-blue-500"
          />
          <span>E-Mail Benachrichtigungen erhalten</span>
        </label>
      </section>

      {/* Profil */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Profil
        </h3>
        <form className="space-y-5 max-w-md" onSubmit={handleSubmit}>
          {[
            { label: "Name", type: "text", placeholder: "Max Mustermann" },
            { label: "E-Mail", type: "email", placeholder: "max@example.com" },
            {
              label: "Altes Passwort",
              type: "password",
              placeholder: "********",
            },
            {
              label: "Neues Passwort",
              type: "password",
              placeholder: "********",
            },
          ].map((field, i) => (
            <div key={i}>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="
                  w-full p-2.5 rounded-xl
                  bg-white/70 dark:bg-gray-800/60
                  border border-gray-300/60 dark:border-gray-700
                  focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500
                  focus:outline-none
                  transition-all duration-200
                "
              />
            </div>
          ))}

          <button
            type="submit"
            className="
              mt-4 
              px-5 py-2.5 
              bg-blue-600 hover:bg-blue-700 
              text-white font-medium 
              rounded-xl 
              shadow-sm hover:shadow-md 
              transition-all duration-300
            "
          >
            Änderungen speichern
          </button>
        </form>
      </section>
    </div>
  );
}
