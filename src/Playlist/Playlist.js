import React, {useEffect, useRef} from "react";
import "./Playlist.css";
import festa from "../assets/playlist/1.jpeg";
import feito from "../assets/playlist/2.png";
import lançamentos from "../assets/playlist/3.jpeg";
import creators from "../assets/playlist/4.jpeg";
import treinar from "../assets/playlist/5.jpeg";
import podcasts from "../assets/playlist/6.jpeg";
import sertanejo from "../assets/playlist/7.jpeg";
import samba from "../assets/playlist/8.jpeg";
import funk from "../assets/playlist/9.jpeg";
import mpb from "../assets/playlist/10.jpeg";
import rock from "../assets/playlist/11.jpeg";
import hiphop from "../assets/playlist/12.jpeg";
import indie from "../assets/playlist/13.jpeg";
import relax from "../assets/playlist/14.jpeg";
import latina from "../assets/playlist/15.jpeg";
import Header from "../Header/Header";

const Playlist = () => {
    const containerRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const containerWidth = containerRef.current.offsetWidth;
      const numColumns = Math.floor(containerWidth / 200);
      containerRef.current.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
    });

    observer.observe(containerRef.current);
    // Limpeza na desmontagem
    return () => observer.disconnect();
  }, []);

    return (
        <div className="playlist-container" ref={containerRef}>
            <Header />
            <div id="result-playlist">
                <div className="playlist">
                    <h1 id="greeting">Boa tarde</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <a href="&" className="cards">
                                <div className="cards card1">
                                    <img src={festa} alt=""/>
                                    <span>Boas festas</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card2">
                                    <img src={feito} alt=""/>
                                    <span>Feitos para você</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card3">
                                    <img src={lançamentos} alt=""/>
                                    <span>Lançamentos</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card4">
                                    <img src={creators} alt=""/>
                                    <span>Creators</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card5">
                                    <img src={treinar} alt=""/>
                                    <span>Para treinar</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card6">
                                    <img src={podcasts} alt=""/>
                                    <span>Podcasts</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card7">
                                    <img src={sertanejo} alt=""/>
                                    <span>Sertanejo</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card8">
                                    <img src={samba} alt=""/>
                                    <span>Samba e pagode</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card9">
                                    <img src={funk} alt=""/>
                                    <span>Funk</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card10">
                                    <img src={mpb} alt=""/>
                                    <span>MPB</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card11">
                                    <img src={rock} alt=""/>
                                    <span>Rock</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card12">
                                    <img src={hiphop} alt=""/>
                                    <span>Hip Hop</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card13">
                                    <img src={indie} alt=""/>
                                    <span>Indie</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card14">
                                    <img src={relax} alt=""/>
                                    <span>Relax</span>
                                </div>
                            </a>
                            <a href="&" className="cards">
                                <div className="cards card15">
                                    <img src={latina} alt=""/>
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" alt="" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a href="&" className="vst" title="Foo Fighters"></a>
                            <span id="artist-name" className="artist-name"></span>
                            <span className="artist-categorie">Artista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist;