import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ControlledCarousel from './components/Carousel.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/IndexDetail.jsx'
import ItemListContainer from './container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ControlledCarousel />
      <ItemListContainer />
      <ItemDetailContainer />
      <main>
      </main>
    </div>
  );
}

export default App;
