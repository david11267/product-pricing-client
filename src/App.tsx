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
  },
  {
    id: 2,
    name: 'Apple MacBook Air M2',
    price: 1199.0,
    posted: new Date('2025-03-28T14:30:00Z'),
  },
  {
    id: 3,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 1429.95,
    posted: new Date('2025-04-10T09:00:00Z'),
  },
  {
    id: 4,
    name: 'Microsoft Surface Laptop 5',
    price: 1099.0,
    posted: new Date('2025-02-15T16:45:00Z'),
  },
  {
    id: 5,
    name: 'Asus ZenBook 14',
    price: 899.99,
    posted: new Date('2025-04-12T08:20:00Z'),
  },
  {
    id: 6,
    name: 'HP Spectre x360',
    price: 1249.5,
    posted: new Date('2025-01-05T12:00:00Z'),
  },
  {
    id: 7,
    name: 'ASUS ROG Zephyrus G14',
    price: 1549.0,
    posted: new Date('2025-03-05T11:10:00Z'),
  },
  {
    id: 8,
    name: 'Apple MacBook Pro 14‑inch',
    price: 1999.0,
    posted: new Date('2025-04-18T18:25:00Z'),
  },
  {
    id: 9,
    name: 'Dell Inspiron 16 Plus',
    price: 1099.99,
    posted: new Date('2025-02-20T09:50:00Z'),
  },
  {
    id: 10,
    name: 'LG Gram 17',
    price: 1299.0,
    posted: new Date('2025-03-15T13:40:00Z'),
  },
];

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className=" space-y-2 p-2">
      <NavBar />
      <div>
        <div className="grid grid-cols-4" id="selectedProducts">
          {selectedProducts.map(sp => (
            <Card>{sp}</Card>
          ))}
        </div>
        <Card>
          <ProductsTable
            products={products}
            setSelectedProducts={setSelectedProducts}
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
