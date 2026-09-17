'use client'; //componente

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '../types/product';

export default function ProductosPage() {
    //traer los procutos al montar el componente
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);
//estado de carga
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Catálogo de productos</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} width={150} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <Link href={`/productos/${product.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}