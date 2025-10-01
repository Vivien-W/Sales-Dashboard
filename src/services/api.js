export async function fetchDashboardData() {
  try {
    const [productsRes, usersRes, cartsRes] = await Promise.all([
      fetch("https://dummyjson.com/products"),
      fetch("https://dummyjson.com/users"),
      fetch("https://dummyjson.com/carts"),
    ]);

    if (!productsRes.ok || !usersRes.ok || !cartsRes.ok) {
      throw new Error("Failed to fetch data from one or more endpoints.");
    }

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
      carts: carts.carts,
      users: users.users,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    // Re-throw the error or return a default state
    throw error; // Or return a structure indicating error
  }
}
