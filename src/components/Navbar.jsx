import { Link } from 'react-router-dom';

const Navbar = () => {
    const navStyle = {
      color: "white"
    };
    
    return (
      <nav>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/films">
            <li>Films</li>
          </Link>
          <Link style={navStyle} to="/people">
            <li>People</li>
          </Link>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  