import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <ModeToggle />
    </div>
  );
};
export default Header;
