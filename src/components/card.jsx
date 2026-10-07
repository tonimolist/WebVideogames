import './card_style.css';

//PASSEM 3 PROPS 
  // 1. joc: objecte amb les dades del joc
  // 2. isFavorite: boolean que indica si el joc és favorit o no
  // 3. onToggleFavorite: funció que s'executa quan es fa clic al botó de favorits
export function Card({ joc, isFavorite, onToggleFavorite }) {
  return (
    //CONTENIDOR TARGETA
    <div className="container-card">
      <div className="Games-card">

        {/*IMATGE*/}
        <div className="Games-image-container">
          <img 
            src={joc.image}
            className="Games-image" 
          />
        </div>

        {/*INFO*/}
        <div className="Games-info">
          <div className="Games-header">
            <span className="Games-id">{joc.id}</span>
            <span className="Games-year">{joc.year}</span>
          </div>

          <h3 className="Games-title">{joc.title}</h3>

          <div className="Games-footer">
            <span className="Games-genre">{joc.genre}</span>

            {/*LIKE*/}
            <button 
              type="button"
              /*Si isFavorite afegeix la classe CSS per pintar el cor*/
              className={`heart-btn ${isFavorite ? 'liked' : ''}`}
              /*Al fer click, avisa a App.jsx perque afegeixi o tregui de l'array*/
              onClick={onToggleFavorite}
              /*Treure de favorits si ja està guardat o afegir a favorits si no ho està*/
              aria-label={isFavorite ? "Treure de favorits" : "Afegir a favorits"}
            >
              {/*COR*/}
              <svg viewBox="0 0 24 24" className="heart-icon">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;