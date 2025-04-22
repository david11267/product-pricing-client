import { Product } from '../interfaces/Product';

interface Props {
  products: Product[];
  onToggle: (product: Product) => void;
}

export default function ProductsTable({ products, onToggle }: Props) {
  return (
    <div>
      <div className="flex flex-row-reverse">
        <input
          placeholder="Search"
          id="search"
          className="m-1 text-center bg-white rounded-full"
          type="text"
        />
      </div>
      <table className="table-auto ">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="allCheck" />
            </th>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Posted</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>
                <input onChange={() => onToggle(p)} type="checkbox" />
              </td>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.posted.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
