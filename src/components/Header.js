import { useState } from "react";
import Logo from "../assets/img/Logo1.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Logo" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("Happy Tummy");

  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li key="H1">Home</li>
          </Link>
          <Link to="/about">
            <li key="H2">About</li>
          </Link>
          <Link to="/contact">
            <li key="H3">Contact</li>
          </Link>
          <Link to="/cart">
            <li key="H4">Cart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline? "Online" : "Offline" }</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
