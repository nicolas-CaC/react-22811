import './App.css';
import { Menu } from './Menu';

const App = () => {

  const container = 'flex flex-col items-center';
  const hello = "text-3xl font-bold underline";
  const holis = 'text-5xl w-fit bg-red-800 text-neutral-100 px-4 rounded';
  const buttonCss = ' bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300'

  const numero = 0;

  function clickHandler() {
    console.log(numero)
  }

  return (
    <div className={ container }>
      <div className={ holis }>Holis</div>
      <h1 className={ hello }>
        Hello world!
      </h1>
      <Menu nuevaOpcion='Productos' />
      <button
        className={ buttonCss }
        onClick={ clickHandler }
      >Soy un boton
      </button>
    </div>
  );
}

export default App;
