import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const { searchNotes } = useContext(NoteContext);
  const navigate = useNavigate();
  let location = useLocation();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    searchNotes(searchText);
  };
  const handleSearchresult = () => {
    searchNotes(searchText);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-outline-primary mx-2"
                to="/login"
                role="button"
              >
                LogIn
              </Link>
              <Link
                className="btn btn-outline-primary mx-2"
                to="/signup"
                role="button"
              >
                SignUp
              </Link>
            </form>
          ) : (
            <form className="d-flex">
              <input
                type="text"
                placeholder="Search notes..."
                value={searchText}
                onChange={handleSearchChange}
                className="form-control me-2"
              />
              <button
                onClick={handleSearchresult}
                className="btn btn-success mx-2"
              >
                Search
              </button>
              <button onClick={handleLogout} className="btn btn-danger mx-2">
                LogOut
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
