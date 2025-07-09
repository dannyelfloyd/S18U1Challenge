import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/resume'}>Resume</Link>
        </nav>
    )
};

export default Nav;