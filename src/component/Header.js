import Button from "./Button";

const Header = ({ onAdd }) => {
  return (
    <header className="header">
      <h2>I am in header component</h2>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};

export default Header;
