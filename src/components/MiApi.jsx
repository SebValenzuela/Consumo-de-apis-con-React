import { useEffect, useState } from "react";
import Carta from "./Carta";

const MiApi = () => {

    const [datos, setDatos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        obtenerData();
    }, []);

    const obtenerData = async () => {
        const url = "https://www.feriadosapp.com/api/laws.json";
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const feriados = data.map((feriado) => {
            return {
                id: feriado.id,
                contenido: feriado.content
            };
        });

        setDatos(feriados.reverse());
    };

    return (
        <>

            <div className="mb-5">
                <label htmlFor="busqueda">Búsqueda</label>
                <input type="text" id="busqueda" placeholder="Buscar feriados" className="form-control" onChange={(e) => {
                    setBusqueda(e.targe.value)
                }} />
            </div>

            <div className="col">
                {
                    datos.map((item) => {
                       return <Carta key={item.id} contenido={item.contenido}/>;
                    })
                }
            </div>
        </>
    );

}

export default MiApi;