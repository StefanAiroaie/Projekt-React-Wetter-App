import Nav from "../componente/Nav";
import ShowTemp from "../componente/ShowTemp";
import { useContext } from "react";
import { mainContext } from "../context/mainProvider";


const Home = () => {
    return (
        <>

            <ShowTemp />
            <h6>Das ist mein wetter app</h6>
            <h5>Please chose the city</h5>
            <Nav />
        </>
    );
}

export default Home;