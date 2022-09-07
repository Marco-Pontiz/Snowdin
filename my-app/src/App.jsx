import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ControlledCarousel from './components/Carousel.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/IndexDetail.jsx'
import ItemListContainer from './container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from './components/CartWidget';

function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:idProducts' elemente={<ItemListContainer />}/>
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartWidget/>}/>
        </Routes>
        </BrowserRouter>
        <ControlledCarousel />
        <ItemListContainer />
        <ItemDetailContainer />
    </div>
    </>
  );
}

export default App;
