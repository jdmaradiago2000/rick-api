import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './componentes/SearchBox'
import CharacterList from './componentes/CharacterList';
import logo from './assets/logo.png'
import "./styles.css";
import LocationInfo from './componentes/LocationInfo';

function App() {

  const [characterType, setCharacterType] = useState ({});

  useEffect(()=>{
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
     .then((res) => setCharacterType(res.data));
  }, []);

  return (
    <div className="App">
      <img className='image-test' src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2013/12/rickandmorty02_120213_1600.jpg?width=1920" alt="" />
      <figure className='logo'>
        <img src={logo} alt="Rick and Morty" />
      </figure>
      <SearchBox setCharacterType={setCharacterType} />
      <LocationInfo characterType={characterType} />
      <h2 className='residents'>Residents</h2> 
      <CharacterList characters={characterType.residents}/>
    </div>
  );
}

export default App;
