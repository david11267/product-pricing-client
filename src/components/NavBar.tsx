import { Card } from './Card';
import NavBtn from './NavBtn';

export default function NavBar() {
  return (
    <div className="flex jus ">
      <Card>
        <NavBtn text="LOGO" />
      </Card>
      <Card>
        <NavBtn text="All Products" />
        <NavBtn text="Dashboard" />
        <NavBtn text="Profile" />
        <NavBtn text="Settings" />
      </Card>
    </div>
  );
}
