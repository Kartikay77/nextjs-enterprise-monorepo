'use server'

export async function searchProducts(query: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Latency sim

  const allProducts = [
    { id: 1, name: "Modern Sofa", price: 499 },
    { id: 2, name: "Oak Dining Table", price: 799 },
    { id: 3, name: "Table Lamp", price: 49 },
    { id: 4, name: "Ergonomic Chair", price: 199 },
  ];

  if (!query) return allProducts;
  return allProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}