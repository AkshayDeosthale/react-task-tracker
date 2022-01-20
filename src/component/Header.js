import Button from "./Button";
import React from "react";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h2>I am in header component</h2>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
