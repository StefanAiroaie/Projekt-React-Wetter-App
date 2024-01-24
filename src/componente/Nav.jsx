import { Link } from "react-router-dom";
const Nav = () => {
    return (<>
        <nav>

            <Link to="/berlin"><button>Berlin</button></Link>
            <Link to="/london"><button>London</button></Link>
            <Link to="/madrid"><button>Madrid</button></Link>
            <Link to="/paris"><button>Paris</button></Link>
        </nav>

    </>);
}

export default Nav;