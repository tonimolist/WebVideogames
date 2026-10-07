import './llistes_style.css';
import { Card } from './card';

//PASSEM 5 PROPS:
// 1. titol - encapçalament
// 2. jocs - jocs que s'hauran d'afegir (array buit)
// 3. favorits - llista de preferits (array buit) 
// 4. onToggleFavorite - funcio per afegir o treure un joc de favorits 
// 5. onCleanFavorites - funcio per buidar la llista de favorits 
export function Llista({ titol, jocs = [], favorits = [], onToggleFavorite, onCleanFavorties }) {
  //Si titol es 'FAVORITES' la variable esFavorits = true sino valdra false
  const esFavorits = titol === 'FAVORITES';
  //Comprova si hi ha cap card a la llista de favorites, si no n'hi ha cap no es mostra res sino es mostra la llista de favorits
  if (esFavorits && jocs.length === 0) return null;

  return (
    <section className="seccio">
        <h2 className="titol-seccio">
          {titol}
          {/*Si es favorit es mostra el numero de jocs favorits*/}
          {esFavorits && <span className="contador-favorits">{jocs.length}</span>}
          {/*Si es favorit es mostra boto per buidar llista*/}
          {esFavorits && (
          <button
            type="button"
            className="btn-buidar-favorits"
            onClick={onCleanFavorties}
          >
            CLEAR
          </button>
        )}
        </h2>

      <div className="caixa-targetes">
        {/*Recorre l'array de jocs amb .map() i generar una targeta per cada joc*/}
        {jocs.map((joc) => {
          {/*Mira si el joc ja esta a favorits comparant IDs*/}
          const isFav = favorits.some((fav) => String(fav.id) === String(joc.id));

          return (
            <Card 
              key={joc.id} 
              //Totes les dades del joc com a prop 
              joc={joc}
              //Bolea per pintar el cor o no 
              isFavorite={isFav}
              //Avisa a App.jsx del joc que s'ha clicat 
              onToggleFavorite={() => onToggleFavorite(joc)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Llista;