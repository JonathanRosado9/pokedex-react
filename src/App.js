import './App.css';
import Navbar from './components/layout/Navbar';
import { Routes, Route} from "react-router-dom";
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import {useState} from "react";
function App() {

  let initialOffset = 0;

  const [pokemon, setPokemon] = useState({});
  const [offset, setOffset] = useState(initialOffset);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route exact path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/" element={<Pokedex pokemon={pokemon} offset={offset} setOffset={setOffset} setPokemon={setPokemon} initialOffset={initialOffset} />} />
        <Route path="/pokemon" element={<Pokedex pokemon={pokemon} offset={offset} setOffset={setOffset} setPokemon={setPokemon} initialOffset={initialOffset} />} />
      </Routes>
    </div>
  );
}

export default App;
