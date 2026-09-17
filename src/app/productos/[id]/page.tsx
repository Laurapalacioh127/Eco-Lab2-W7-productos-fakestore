import { Product } from "@/app/types/product";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await response.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductoDetallePage({ params }: Props) {
  const { id } = await params; // esperar la promesa

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