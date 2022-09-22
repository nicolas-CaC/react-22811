import { useEffect, useState } from "react"
import { Color } from "./Color";
import { Loading } from "./Loading";

export const About = () => {

    const buttonCss = 'bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300'
    const container = 'flex flex-col items-center justify-center'

    const [valor, setValor] = useState(0);
    const [iniciado, setIniciado] = useState(false);
    const [loading, setLoading] = useState(true);

    function handleClick() {
        // setIniciado(true);
        setIniciado(!iniciado);
    }

    useEffect(() => {

        if (!iniciado) {
            return
        }

        setTimeout(() => {
            setValor(valor + 1)
        }, 1000);
    }, [iniciado, valor])


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [loading])

    // console.log(valor);

    return (
        <div className={ container }>
            <Color>
                { (frase) =>
                    <div>NOSOTROSSS { frase } </div>
                }
            </Color>

            <div>state valor: { valor }</div>
            <button
                className={ buttonCss }
                onClick={ handleClick }>
                Empezar cronómetro
            </button>
            <Color>
                {
                    (frase) =>
                        loading
                            ? <Loading />
                            : <div>Ya cargó { frase }</div>
                }
            </Color>

        </div>
    )
}