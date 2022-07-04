import './App.css';
import NavBar from './componentes/NavBar';
import ItemListenContainer from './componentes/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListenContainer nombre="Pedro" edad={28}/>
      <ItemListenContainer nombre="Juan" edad={32}/>
    </div>
  );
}

export default App;
