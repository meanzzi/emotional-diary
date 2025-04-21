import "./Header.css";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="head">
      <div className="head_left">{leftChild}</div>
      <div className="head_center">{title}</div>
      <div className="head_right">{rightChild}</div>
    </header>
  );
};

export default Header;
