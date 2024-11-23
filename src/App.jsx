import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./Paginas/Layout";
import Ejercicio1  from "./Paginas/Ejercicio1";
import Ejercicio2  from "./Paginas/Ejercicio2";

function App() {

  return (
      <div>
        <h1>Rutas</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="Ejercicio1" element={<Ejercicio1 />}/>
        <Route path="Ejercicio2" element={<Ejercicio2 />}/>
        </Route>
      </Routes>
      </div>
  )
}

export default App
