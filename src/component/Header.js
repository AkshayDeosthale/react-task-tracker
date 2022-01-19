import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <h2>I am in header component</h2>
      <Button color="green" text="hello" />
    </header>
  );
};

Header.defaultProp = { name: "Add your content here" };

export default Header;
