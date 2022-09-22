import { useRef } from "react";

export const Services = () => {

    const cajaRef = useRef();


    const handleClick = () => {
        console.log('Caja:', cajaRef.current);
    }

    const container = 'flex flex-col w-full items-center'
    return (
        <>
            <div className={ container }>
                <div>SERVICIOOOOOOOOOOOOOOOSSSSSSSSS</div>
                <div ref={ cajaRef }>Cajita</div>
                <button onClick={ handleClick }>Boton</button>
            </div>
        </>
    )
}