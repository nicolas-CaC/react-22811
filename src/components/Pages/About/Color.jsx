export const Color = ({ children }) => {

    const container = 'bg-green-800 text-neutral-100 px-2 py-1 rounded'
    const frase = 'Y soy de color Verde!'

    return (
        <div className={ container }>
            { children(frase) }
        </div>
    )
}