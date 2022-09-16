import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx';
import ControlledCarousel from './components/navbar/Carousel';
import ItemDetailContainer from './components/ItemDetailContainer/IndexDetail.jsx'
import ItemListContainer from './container/ItemListContainer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from './components/navbar/CartWidget';
import CartProvider from './context/CartContext.jsx'

function App() {

  return (
    <>
    <div className="App">

      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <ControlledCarousel />
            <Routes>
              <Route path='/product' element={<ItemListContainer />}/>
              <Route path='/product/:idProduct' element={<ItemListContainer />}/>
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/detail' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<CartWidget/>}/>
            </Routes>
        </CartProvider>

        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
