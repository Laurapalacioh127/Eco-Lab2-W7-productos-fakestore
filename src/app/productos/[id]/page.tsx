import { Product } from "@/app/types/product";

interface Props {
  params: { id: string };
}

// Prehook de build: le dice a Next.js qué IDs debe pre-generar
//server component
export async function generateStaticParams() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await response.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductoDetallePage({ params }: Props) {
  const { id } = params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await response.json();

  return (
    <div>
      <img src={product.image} alt={product.title} width={300} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
}