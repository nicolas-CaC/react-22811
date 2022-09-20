import { Link } from "react-router-dom"

export const Pages = ({ clases }) => {

    const menu = [
        'Inicio',
        'Servicios',
        'Nosotros',
        'Contact'
    ]

    return (
        <ul className='flex'>
            { menu.map(item =>
            (<Link
                key={ item }
                className={ clases }
                to={ item.toLowerCase() }>
                { item }
            </Link>
            )) }
        </ul>
    )
}