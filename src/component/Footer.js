import React from "react";

function Footer({ setShowAbout }) {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <a onClick={() => setShowAbout((state) => !state)}>About</a>
    </footer>
  );
}

export default Footer;
