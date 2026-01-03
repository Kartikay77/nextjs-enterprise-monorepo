import { Suspense } from "react";
import { ProductCard } from "@repo/ui";
import { searchProducts } from "./actions";

export default function Page({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || "";

  return (
    <main style={{ padding: "40px", fontFamily: "system-ui" }}>
      <h1>Wayfair Clone (Monorepo Demo)</h1>
      <form style={{ marginBottom: "20px" }}>
        <input name="q" defaultValue={query} placeholder="Search..." style={{ padding: "8px", fontSize: "16px" }} />
        <button type="submit" style={{ padding: "8px", marginLeft: "10px" }}>Search</button>
      </form>
      <Suspense fallback={<p style={{ color: "blue" }}>Loading inventory...</p>}>
        <ProductList query={query} />
      </Suspense>
    </main>
  );
}

async function ProductList({ query }: { query: string }) {
  const products = await searchProducts(query);
  if (products.length === 0) return <p>No products found.</p>;
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((p) => (
        <ProductCard key={p.id} title={p.name} price={p.price} />
      ))}
    </div>
  );
}