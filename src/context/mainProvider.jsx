import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext();

const mainProvider = ({ children }) => {

    const apiKey = "de200dec1797c6dac143332f6d4912d2"

    const [vremea, setVremea] = useState([]);
    const [oras, setOras] = useState(['Globe']);


    useEffect(() => {
        const getApi = async () => {
            const raspunsApi = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${oras}&appid=${apiKey}&units=metric&lang=de`)
            setVremea(raspunsApi.data)
        }
        getApi();
    }, [oras])


    return (<>
        <mainContext.Provider value={{ vremea, setVremea, oras, setOras }}>
            {children}
        </mainContext.Provider>

    </>);
}

export default mainProvider;