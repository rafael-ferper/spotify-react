import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="premium">
            <div className="premium__text">
                <p>TESTAR O PREMIUM DE GRAÇA</p>
                <p id="subtitle">Inscreva-se para curtir música ilimitada e podcasts só com
                    alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <div className="button__premium">
                <button>
                    Inscreva-se grátis
                </button>
            </div>
        </footer>
    )
}

export default Footer;