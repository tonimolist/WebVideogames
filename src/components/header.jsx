import './header_style.css';

//PASSEM 2 PROPS: 
//1. titol principal
//2. subtitol
export function Header({ titol, subtitol}) {
  return (
    <header>
      <h1 className="titolGran">{titol}</h1>
      {subtitol && <p className="subtitol">•  {subtitol}  •</p>}
    </header>
  );
}

export default Header;

