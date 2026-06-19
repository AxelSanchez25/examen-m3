import BuyButton from "@/components/BuyButton";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Producto Digital</h1>
      <p>Curso Next.js + Stripe</p>

      <h2>19€</h2>

      <BuyButton />
    </main>
  );
}