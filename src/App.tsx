import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import NavBar from './components/NavBar';
import ProductsTable from './components/ProductsTable';
import { Product } from './interfaces/Product';

const products: Product[] = [
  {
    id: 1,
    name: 'Dell XPS 13',
    price: 999.99,
    posted: new Date('2025-04-01T10:15:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=Dell+XPS+13',
  },
  {
    id: 2,
    name: 'Apple MacBook Air M2',
    price: 1199.0,
    posted: new Date('2025-03-28T14:30:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=Apple+MacBook+Air+M2',
  },
  {
    id: 3,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 1429.95,
    posted: new Date('2025-04-10T09:00:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=Lenovo+ThinkPad+X1+Carbon',
  },
  {
    id: 4,
    name: 'Microsoft Surface Laptop 5',
    price: 1099.0,
    posted: new Date('2025-02-15T16:45:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=Microsoft+Surface+Laptop+5',
  },
  {
    id: 5,
    name: 'Asus ZenBook 14',
    price: 899.99,
    posted: new Date('2025-04-12T08:20:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=Asus+ZenBook+14',
  },
  {
    id: 6,
    name: 'HP Spectre x360',
    price: 1249.5,
    posted: new Date('2025-01-05T12:00:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=HP+Spectre+x360',
  },
  {
    id: 7,
    name: 'ASUS ROG Zephyrus G14',
    price: 1549.0,
    posted: new Date('2025-03-05T11:10:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=ASUS+ROG+Zephyrus+G14',
  },
  {
    id: 8,
    name: 'Apple MacBook Pro 14‑inch',
    price: 1999.0,
    posted: new Date('2025-04-18T18:25:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=Apple+MacBook+Pro+14‑inch',
  },
  {
    id: 9,
    name: 'Dell Inspiron 16 Plus',
    price: 1099.99,
    posted: new Date('2025-02-20T09:50:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=Dell+Inspiron+16+Plus',
  },
  {
    id: 10,
    name: 'LG Gram 17',
    price: 1299.0,
    posted: new Date('2025-03-15T13:40:00Z'),
    imageUrl: 'https://placehold.co/600x400?text=LG+Gram+17',
  },
];

function App() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  function toggleProduct(product: Product) {
    setSelectedProducts(selectedProducts => [...selectedProducts, product]);
    throw new Error('Function not implemented.');
  }

  return (
    <div className="  space-y-2 p-2 flex-col justify-items-center">
      <NavBar />

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 space-y-4"
        id="selectedProducts"
      >
        {selectedProducts.map(p => (
          <Card>
            <div>
              <h2>{p.name}</h2>
              <img
                className="selectedProductGridImage rounded-4xl m-2 contain-content"
                src={p.imageUrl}
                alt=""
              />
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <ProductsTable products={products} onToggle={toggleProduct} />
      </Card>
    </div>
  );
}

export default App;
