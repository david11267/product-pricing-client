import './App.css';
import { Card } from './components/Card';
import NavBar from './components/NavBar';
import ProductsTable from './components/ProductsTable';

function App() {
  return (
    <div className=" space-y-2 p-2">
      <NavBar />
      <div>
        <Card>
          <ProductsTable />
        </Card>
      </div>
    </div>
  );
}

export default App;
