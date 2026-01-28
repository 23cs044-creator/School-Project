import { Link } from "react-router-dom";
import "./Nav.css"
function Navbar() {
  return (
      
      <div style={{width:'100px'}}>
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/registration" className="nav-button">Registration</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
    </div>
  )
}

export default Navbar
