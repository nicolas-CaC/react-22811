import { useState } from "react"

export const Home = () => {

    const buttonCss = ' bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300'

    // let numero = 0;

    const [numero, setNumero] = useState(0)
    const [loading, setLoading] = useState(true)

    function handleClick() {
        setNumero(numero + 1)
        setLoading(!loading)
    }

    console.log(numero)

    return (
        <>
            <div>
                { loading
                    ? "Esta Cargando"
                    : "Ya se cargó" }
            </div>
            <button
                className={ buttonCss }
                onClick={ handleClick }
            >Soy un boton y el numero es: { numero }
            </button>
        </>
    )
}