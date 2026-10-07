import './footer_style.css';

//PASEM 1 PROP:
// 1. text al peu de pagina
export function Footer ({text}){
    //Funcio que s'executa quan es fa click al boto 
    const pujarDalt = () => {
        //Desplaça la pantalla 
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

    return (
        <footer className = "peu">
            <button 
            type="button" 
            className="btn-footer-top" 
            //Crida la funcio quan es fa el click
            onClick={pujarDalt} 
            title="Tornar a dalt">BACK TO TOP
            </button>
            <p className="footer-text">{text}</p>
        </footer>
    );
}

export default Footer;