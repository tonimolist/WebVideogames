import { useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Llista } from './components/llistes';
import { Games } from './data';
import './App.css';

function App() {
  //Array on guardarem els jocs favorits
  const [favorits, setFavorits] = useState([]);
  //GENERE seleccionat per filtrar
  const [genereActiu, setGenereActiu] = useState('All');
  //ANY seleccionat per filtrar
  const [anyActiu, setAnyActiu] = useState('All');

  //FAVORITS 
  // Funcio per posar o treure un joc de favorits 
  const toggleFavorite = (joc) => {
    //Comprovem si el joc esta a favorits 
    const jaEsFavorit = favorits.some((fav) => String(fav.id) === String(joc.id));
    
    if (jaEsFavorit) {
      //Si ja es favorit el treiem de la llista sino l'afegim
      setFavorits(favorits.filter((fav) => String(fav.id) !== String(joc.id)));
    } else {
      //Si no hi era, creem un array copiant els existents i afegim el nou 
      setFavorits([...favorits, joc]);
    }
  };

  //ANY I GENERE
  //Apliquem els filtres sobre la llista completa 
  const jocsFiltrats = Games.filter((joc) => {
    // 1. VALIDACIO de GENERE
    const valorGenere = joc.genre || joc.genere || '';
    const compleixGenere =
      genereActiu === 'All' ||
      valorGenere.toLowerCase() === genereActiu.toLowerCase();

    // 2. VALIDACIO de ANY
    const anyJoc = Number(joc.year || joc.any);
    let compleixAny = true;
    //Comprovem en quina franja cau segons el boto 
    if (anyActiu === '2000-2005') compleixAny = anyJoc >= 2000 && anyJoc <= 2005;
    else if (anyActiu === '2005-2010') compleixAny = anyJoc >= 2005 && anyJoc <= 2010;
    else if (anyActiu === '2015-2020') compleixAny = anyJoc >= 2015 && anyJoc <= 2020;
    else if (anyActiu === '2020-2026') compleixAny = anyJoc >= 2020 && anyJoc <= 2026;

    return compleixGenere && compleixAny;
  });

  //LLISTES ESTATIQUES per crear els botons de FILTRE
  const generesDisponibles = [
    'All',
    'Action',
    'Adventure',
    'Battle Royale',
    'Fighting',
    'JRPG',
    'RPG',
    'Sandbox',
    'MOBA',
    'Platforms',
    'Shooter',
    "Simulation",
    "Survival",
    'Puzzle',
  ];
  const rangsAnysDisponibles = [
    'All',
    '2000-2005',
    '2005-2010',
    '2015-2020',
    '2020-2026',
  ];

  const buidarFavorits = () => {
    setFavorits([]);
  }

  return (
    <div className="linia">
      <Header 
        titol="VideoGames" 
        subtitol="The essential guide for lovers of video games"
        totalFavorits={favorits.length}
      />

      {/* Secció de Favorits */}
      <Llista 
        titol="FAVORITES" 
        jocs={favorits} 
        favorits={favorits}
        onToggleFavorite={toggleFavorite}
        onCleanFavorties={() => buidarFavorits([])}
      />

      {/* Contenidor de Filtres */}
      <div className="filtres-contenidor">
        {/* Fila de Gènere */}
        <div className="filtres-grup">
          <span className="filtres-etiqueta">GENRE</span>
          <div className="filtres-botons">
            {generesDisponibles.map((genere) => (
              <button
                key={genere}
                type="button"
                className={`btn-filtre ${genereActiu === genere ? 'actiu' : ''}`}
                onClick={() => setGenereActiu(genere)}
              >
                {genere}
              </button>
            ))}
          </div>
        </div>

        {/* Fila d'Anys */}
        <div className="filtres-grup">
          <span className="filtres-etiqueta">YEARS</span>
          <div className="filtres-botons">
            {rangsAnysDisponibles.map((rang) => (
              <button
                key={rang}
                type="button"
                className={`btn-filtre ${anyActiu === rang ? 'actiu' : ''}`}
                onClick={() => setAnyActiu(rang)}
              >
                {rang}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Secció de Catàleg amb filtres aplicats */}
      <Llista 
        jocs={jocsFiltrats} 
        favorits={favorits}
        onToggleFavorite={toggleFavorite}
      />

      <Footer text="Toni Molist  -  2026 / 2027"/>
    </div>
  );
}

export default App;