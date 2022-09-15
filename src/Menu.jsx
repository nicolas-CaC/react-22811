export const Menu = (props) => {

    const menu = [
        'Inicio',
        'Servicios',
        'Nosotros',
        'Contact'
    ]

    const propsCss = "px-4 bg-green-800 text-white rounded"

    return (<ul className='flex'>
        { menu.map(item =>
        (<li
            key={ item }
            className='mx-2'>
            { item }
        </li>
        )) }
        <li
            className={ propsCss }>
            { props.nuevaOpcion }
        </li>
    </ul>
    )
}