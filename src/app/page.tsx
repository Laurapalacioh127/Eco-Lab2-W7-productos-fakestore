//redirección a /products
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/productos');
}