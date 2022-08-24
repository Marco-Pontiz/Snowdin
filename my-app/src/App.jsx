import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './container/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <main>
    <ItemCount/>
      </main>
    </div>
  );
}

export default App;
