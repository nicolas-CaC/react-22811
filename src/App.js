import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Services } from './components/Pages/Services/Services';
import { About } from './components/Pages/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Pages/Home/Home';
import './App.css';

const App = () => {

  return (

    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/servicios' element={ <Services /> } />
          <Route path='/nosotros' element={ <About /> } />
          <Route path='*' element={ <Home /> } />
        </Routes>
      </main>
      <footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
