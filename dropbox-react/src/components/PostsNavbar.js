//This is the Navbar component that would display the navbar on each page.
import { Link } from 'react-router-dom';
import {FaSignOutAlt} from "react-icons/fa";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Student Corner</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/createpost">Create Posts</Link> 
                <Link to="/">Mark Otto <FaSignOutAlt/></Link> 
            </div>
        </nav>
     );
}
 
export default Navbar;