import { Card } from './Card';
import NavBtn from './NavBtn';

export default function NavBar() {
  return (
    <div className="flex justify-between">
      <div>
        <Card>
          <NavBtn text="All Products" />
        </Card>
      </div>
      <div>
        <Card>
          <NavBtn text="All Products" />
          <NavBtn text="Dashboard" />
          <NavBtn text="Profile" />
          <NavBtn text="Settings" />
        </Card>
      </div>
    </div>
  );
}
