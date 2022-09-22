import { useState } from "react"
import banner from './../../../assets/img/banner.jpg'

export const Home = () => {

    const buttonCss = ' bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300'

    // let numero = 0;

    const [numero, setNumero] = useState(0)
    const [loading, setLoading] = useState(true)

    function handleClick() {
        setNumero(numero + 1)
        setLoading(!loading)
    }

    // console.log(numero)

    const bannerCss = "mx-0 w-full h-[90vh] object-cover object-top "
    const container = 'flex flex-col items-center';

    setTimeout(() => {
        stateChange()
    }, 2500)

    function stateChange() {
        setLoading(false)
        console.log(loading);
    }


    return (
        <div className={ container }>
            <img
                src={ banner }
                alt={ banner }
                className={ bannerCss }
            />
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
        </div>
    )
}