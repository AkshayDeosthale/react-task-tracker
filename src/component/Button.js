const Button = ({ text, color }) => {
  const onClick = () => {
    console.log("This is clicked");
  };

  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
