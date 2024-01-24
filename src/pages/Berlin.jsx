import NavToHome from "../componente/NavToHome";
import ShowTemp from "../componente/ShowTemp";

const Berlin = () => {
    return (
        <>
            <h6>Hier ist das wetter in Berlin</h6>

            <ShowTemp />

            <NavToHome />
        </>
    );
}

export default Berlin;