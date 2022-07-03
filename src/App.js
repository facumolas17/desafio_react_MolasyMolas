import './App.css';
import NavBar from './componentes/NavBar';
import ItemListenContainer from './componentes/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListenContainer saludo="hola mundo"/>
    </div>
  );
}

export default App;
