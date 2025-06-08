export async function fetchDashboardData() {
  const [productsRes, usersRes, cartsRes] = await Promise.all([
    fetch('https://dummyjson.com/products'),
    fetch('https://dummyjson.com/users'),
    fetch('https://dummyjson.com/carts'),
  ]);

  const [products, users, carts] = await Promise.all([
    productsRes.json(),
    usersRes.json(),
    cartsRes.json(),
  ]);

  const totalSales = carts.carts.reduce((sum, cart) => sum + cart.total, 0);

  return {
    products: products.total,
    customers: users.total,
    orders: carts.total,
    sales: totalSales,
    carts: carts.carts,  // falls du die Daten noch detaillierter brauchst
    users: users.users,  // z.B. für Kundenliste
  };
}
