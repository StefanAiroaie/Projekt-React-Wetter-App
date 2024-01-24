
import { useContext, useEffect, useState } from 'react';
import { mainContext } from '../context/mainProvider';
const ShowTemp = () => {

    const { vremea, setOras } = useContext(mainContext);

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(vremea);
    }, [vremea]);


    return (<>

        <>
            <h1>das ist show temp</h1>

            {data
                ? (
                    <section>
                        <div className='buttons'>
                            <button onClick={() => setOras("Hamburg")}>Hamburg</button>
                            <button onClick={() => setOras("Berlin")}>Berlin</button>
                            <button onClick={() => setOras("Köln")}>Köln</button>
                            <button onClick={() => setOras("Australien")}>Australien</button>
                        </div>
                        <div>
                            <h2>{data.name}</h2>
                            <h3>{data?.weather?.[0].description}</h3>
                            <img src={`http://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`} />
                            <h3>Aktuell: {data?.main?.temp} °C</h3>
                            <h3>Windgeschwindigkeit: {data?.wind?.speed} km/h</h3>
                        </div>
                    </section>
                )
                : (<p>Loading...</p>)
            }
        </>
    </>);
}

export default ShowTemp;