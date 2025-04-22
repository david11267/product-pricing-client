import { Product } from '../interfaces/Product';

interface Props {
  products: Product[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<never[]>>;
}

export default function ProductsTable({ products }: Props) {
  function ToggleChecked(): void {
    throw new Error('Function not implemented.');
  }

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
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>
                <input onChange={() => ToggleChecked()} type="checkbox" />
              </td>
              <td>3</td>
              <td>MacBookPro 2023 m2</td>
              <td>5425kr</td>
              <td> 2025-04-22-22:55</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
