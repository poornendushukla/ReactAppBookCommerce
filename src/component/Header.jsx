import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/header.scss";
import { Dropdown } from "react-bootstrap";

export default function Header(props) {
  const { cart } = useSelector((state) => state?.getBooksList);
  const [user, setUser] = useState("Login");
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(localStorage.getItem("username"));
    }
  }, [cart]);
  const handleLogout=()=>{
    localStorage.removeItem("username");
    setUser("Login")
  }
  const renderDropdown = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="header-username"
        >
          {user}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item  onClick={handleLogout} href="/">Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  return (
    <div className="container-fluid header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="icon">
              <i className="fas fa-book"></i>
            </span>
            <span className="brand"> ReadersJU</span>
          </a>
          <div className="search-box">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div
            className="collapse navbar-collapse custom-nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="far fa-bell"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bookupload">
                  <i className="fa-solid fa-book"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <i className="fas fa-shopping-cart">
                    <span
                      className={cart?.length > 0 ? "cart-item-number" : ""}
                    >
                      {" "}
                      {cart?.length}
                    </span>
                  </i>
                </a>
              </li>
              <li className="nav-item">
                {user == "Login" ? (
                  <div className="login-label">
                    {" "}
                    <a className="nav-link text-capitalize" href="/login">
                      {user}
                    </a>
                  </div>
                ) : (
                  renderDropdown()
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
