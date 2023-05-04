import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Features</Link></li>
                    <li><Link to="/about">Free Audio Books</Link></li>
                    <li><Link to="/article">For Sales</Link></li>
                </ul>
            </div>

        </>

    )
}
export default Navbar;