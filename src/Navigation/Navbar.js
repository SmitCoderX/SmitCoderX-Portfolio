import { Link } from 'react-router-dom';
import "../Css/Home.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contacts</Link>
            </div>
        </div>
     );
}

export default Navbar;