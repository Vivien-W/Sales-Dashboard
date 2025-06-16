Dokumentation 📊 React Sales Dashboard

Ein professionelles Dashboard-Projekt mit **React**, **Vite**, **Tailwind CSS** und **Recharts** zur Visualisierung von KPIs, Charts und Verkaufsdaten.

Features

- Dunkles Design (dunkelblau + blau)
- KPI-Boxen mit Icons
- Interaktive Diagramme (Line, Bar, Pie)
- Komponentenbasiertes Layout
- Erweiterbar mit echten API-Daten

Voraussetzungen

- Node.js 
- NPM oder Yarn

Installation

```bash
# Projekt anlegen
npm create vite@latest react-dashboard -- --template react

cd react-dashboard

# Abhängigkeiten installieren
npm install

# Tailwind CSS installieren
npm install tailwindcss @tailwindcss/vite
(Installationsanweisung: https://tailwindcss.com/docs/installation/using-vite)

# TailwindCSS konfigurieren (vite.config.js)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
})

# Recharts & Icons
npm install recharts react-icons






Projektstruktur

src/
├── App.jsx
├── main.jsx
├── index.css
├── assets/
      ├──profil-image.png
├── context/
      ├──DarkModeContext.jsx
├── pages/
      ├──CustomerPage.jsx
      ├──SalesPage.jsx
      ├──SettingsPage.jsx
├── services/
      ├──api.js
├── components/
      ├── charts/
          ├──SalesChart.jsx
          ├──UmsatzChart.jsx
          ├──UmsatzentwicklungChart.jsx
          ├──VertriebskanäleChart.jsx
      ├── dashboard/
          ├──Dashboard.jsx
          ├──KPIBox.jsx
      ├── layout/
          ├──Sidebar.jsx

