import React from "react";
import "./Sidebar.css"
import logo from "../assets/icons/logo-spotify.png"

const Sidebar = () => {
    return ( 
        <>
            <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="&">
                        <img src={logo} alt="logo do spotify"/>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="&">
                            <i className="fa fa-home"></i>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="&">
                            <i className="fa fas fa-search"></i>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="sidebar__navigation library">
                <div className="library__content">
                    <button href="&" className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua Biblioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>
                <section className="section__playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">Criar playlist</button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="&">Cookies</a>
                </div>
                <div className="languages">
                    <button>
                        <span className="fa fa-globe"></span>
                        Português do Brasil
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;