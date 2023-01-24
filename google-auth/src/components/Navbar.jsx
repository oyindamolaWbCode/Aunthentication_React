 import { Link } from "react-router-dom";


 const Navbar = () => {
    return(
        <div className="links">
           <Link to="./" className="link">Logo</Link>
           <ul>
            <Link to="/Login" className="join-now link"> 
                    Join Now
            </Link>
           </ul>
        </div>
    )
 }

 export default Navbar;