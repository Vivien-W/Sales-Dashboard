import {CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar,
  
} from 'recharts';


const barData = [
  { name: 'Produkt A', orders: 400 },
  { name: 'Produkt B', orders: 300 },
  { name: 'Produkt C', orders: 300 },
  { name: 'Produkt D', orders: 200 },
];


export default function SalesChart() {
  return (
      <div className="bg-cyan-200 dark:bg-cyan-100 p-4 rounded-2xl shadow-md">
        <h2 className="text-lg text-red-500 mb-2">Bestellungen pro Kategorie</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={false} />  {/* auf false setzen, sonst erscheint ein hellgrauer Hintergrundbalken */}
            <Bar dataKey="orders" fill="#3b82f6" isAnimationActive={false} activeBar={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
}
