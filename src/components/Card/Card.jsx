import "../../styles/Card.scss";
import "../../styles/Home.scss";
import logoBooki from "../../assets/logo-projets/Booki.png";
import logoOhmyfood from "../../assets/logo-projets/ohmyfood.png";
import logoPanthere from "../../assets/logo-projets/panthere.png";
import logoKanap from "../../assets/logo-projets/Kanap.png";
import logoPiquante from "../../assets/logo-projets/piquante.PNG";
import logoKasa from "../../assets/logo-projets/Kasa.png";

import logoHTML from "../../assets/logo-langage/HTML5_logo.png";
import logoCSS from "../../assets/logo-langage/CSS3_logo-redim.png";
import logoSass from "../../assets/logo-langage/Sass.png";
import logoJS from "../../assets/logo-langage/JavaScript-logo.png";
import logoNodeJs from "../../assets/logo-langage/nodeJs.png";
import logoMongoDB from "../../assets/logo-langage/mongodb.png";
import logoExpress from "../../assets/logo-langage/express.png";
import logoReact from "../../assets/logo-langage/react.png";
import logoReactRouter from "../../assets/logo-langage/react-router.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Card() {
  function handleMouseMove2(ev) {
    let mediaQueries = window.matchMedia("(min-width: 700px)");
    if (mediaQueries.matches) {
      const ele = ev.currentTarget;
      const rect = ele.getBoundingClientRect();

      let xAxis = (ev.clientX - rect.left - rect.width / 2) / -13;
      let yAxis = (ev.clientY - rect.top - rect.height / 2) / 18;

      ele.style.transform = `perspective(800px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      ele.style.boxShadow =
        "0 20px 20px rgb(0 0 0 / 10%), 0 0 50px rgb(0 0 0 / 10%)";

      // Calculer la position relative de la souris dans l'élément
      let X = (ev.clientX - rect.left) / rect.width;
      let Y = (ev.clientY - rect.top) / rect.height;

      // Ajustement des variables CSS pour l'arrière-plan
      let bgX = 40 + 20 * X;
      let bgY = 40 + 20 * Y;

      ele.style.setProperty("--x", `${X * 100}%`);
      ele.style.setProperty("--y", `${Y * 100}%`);
      ele.style.setProperty("--bg-x", `${bgX}%`);
      ele.style.setProperty("--bg-y", `${bgY}%`);
    }
  }

  function handleMouseEnter(e) {
    e.currentTarget.style.transition = `none`;
  }
  function handleMouseLeave(e) {
    e.currentTarget.style.transition = `all 0.8s 0.3s cubic-bezier(.5,.29,.36,1.97)`;
    e.currentTarget.style.transform = `rotateY(0deg) rotateX(0deg)`;
    e.currentTarget.style.boxShadow = "rgb(0 0 0 / 10%) 0px 4px 20px 0px";
  }
  return (
    <section className="structure">
      <h2 className="titre titre--projet">Découvrez mes projets</h2>
      <div className="section-card">
        <div
          className="container"
          onMouseMove={(ev) => handleMouseMove2(ev)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
        >
          <div className="card__image">
            <img src="http://allyourhtml.club/carousel/image.webp" alt="" />
          </div>
          <div className="couleur-card1"></div>
          <div className="couleur-card2"></div>
        </div>
        <div
          className="container"
          onMouseMove={(ev) => handleMouseMove2(ev)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
        >
          <div className="couleur-card">
            <div className="couleur-card1"></div>
            <div className="couleur-card2"></div>

            <div className="logo">
              <div className="fond-couleur"></div>

              <img src={logoKasa} alt="logo" className="img-logo--kasa" />
            </div>

            <div className="infos">
              <div className="infos-underline"></div>
              <h4 className="infos-description">
                Création d'une application web de location immobilière avec
                React en singlepage.
              </h4>
              <h3>Langages / Frameworks utilisés :</h3>
              <div className="langages-position">
                <div className="langages-infos">
                  <img className="logo-langage" src={logoReact} alt="React" />
                  <p>React</p>
                </div>
                <div className="langages-infos">
                  <img
                    className="logo-langage"
                    src={logoReactRouter}
                    alt="React"
                  />
                  <p>React Router</p>
                </div>
                <div className="langages-infos">
                  <img className="logo-langage" src={logoSass} alt="Sass" />
                  <p>Sass</p>
                </div>
              </div>
            </div>
            <a
              className="moreInfo"
              href="https://p7-kasa.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer
              <div className="icon-link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          </div>
        </div>

        <div
          className="container"
          onMouseMove={(ev) => handleMouseMove2(ev)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
        >
          <div className="couleur-card">
            <div className="logo">
              <img src={logoPiquante} alt="logo" className="img-logo--kanap" />
            </div>

            <div className="infos">
              <div className="infos-underline"></div>
              <h4 className="infos-description">
                Construction d'une API sur laquelle on peut effectuer des
                opérations CRUD (Create, Read, Update, Delete) de manière
                sécurisée.
              </h4>
              <h3>Langages / Frameworks utilisés :</h3>
              <div className="langages-position">
                <div className="langages-infos">
                  <img
                    className="logo-langage"
                    src={logoNodeJs}
                    alt="Node.JS"
                  />
                  <p>Node.JS</p>
                </div>
                <div className="langages-infos">
                  <img
                    className="logo-langage"
                    src={logoExpress}
                    alt="Express"
                  />
                  <p>Express</p>
                </div>
                <div className="langages-infos">
                  <img
                    className="logo-langage"
                    src={logoMongoDB}
                    alt="MongoDB"
                  />
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
            <a
              className="moreInfo"
              href="https://github.com/Edgar-JALLIER/P6-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer
              <div className="icon-link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          </div>
        </div>

        <div
          className="container"
          onMouseMove={(ev) => handleMouseMove2(ev)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
        >
          <div className="couleur-card">
            <div className="logo">
              <img src={logoKanap} alt="logo" className="img-logo--kanap" />
            </div>

            <div className="infos">
              <div className="infos-underline"></div>
              <h4 className="infos-description">
                Construction d'un site de e-commerce avec une page d'accueil,
                une page produit, une page panier et une page de confirmation.
              </h4>
              <h3>Langages utilisés :</h3>
              <div className="langages-position">
                <div className="langages-infos">
                  <img className="logo-langage" src={logoJS} alt="JavaScript" />
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <a
              className="moreInfo"
              href="https://github.com/Edgar-JALLIER/P5-Kanap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer
              <div className="icon-link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          </div>
        </div>

        <div
          className="container"
          onMouseMove={(ev) => handleMouseMove2(ev)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
        >
          <div className="couleur-card">
            <div className="logo">
              <div className="fond-couleur"></div>
              <img
                src={logoPanthere}
                alt="logo"
                className="img-logo--panthere"
              />
            </div>

            <div className="infos">
              <div className="infos-underline"></div>
              <h4 className="infos-description">
                Optimisation du SEO d'un site web existant en utilisant
                "Lighthouse" et "PageSpeed Insights".
              </h4>
              <h3>Langages utilisés :</h3>
              <div className="langages-position">
                <div className="langages-infos">
                  <img className="logo-langage" src={logoHTML} alt="HTML" />
                  <p>HTML</p>
                </div>
                <div className="langages-infos">
                  <img className="logo-langage" src={logoCSS} alt="CSS" />
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <a
              className="moreInfo"
              href="https://edgar-jallier.github.io/P4-La_Panthere/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer
              <div className="icon-link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          </div>
        </div>

        <div
          className="container"
          onMouseMove={(ev) => handleMouseMove2(ev)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
        >
          <div className="couleur-card">
            <div className="logo">
              <div className="fond-couleur"></div>
              <img src={logoOhmyfood} alt="logo" className="img-logo" />
            </div>

            <div className="infos">
              <div className="infos-underline"></div>
              <h4 className="infos-description">
                Transformation d'une maquette en site web avec ajout
                d'animations CSS et totalement responsive.
              </h4>
              <h3>Langages utilisés :</h3>
              <div className="langages-position">
                <div className="langages-infos">
                  <img className="logo-langage" src={logoHTML} alt="HTML" />
                  <p>HTML</p>
                </div>
                <div className="langages-infos">
                  <img className="logo-langage" src={logoCSS} alt="CSS" />
                  <p>CSS</p>
                </div>
                <div className="langages-infos">
                  <img className="logo-langage" src={logoSass} alt="SASS" />
                  <p>SASS</p>
                </div>
              </div>
            </div>
            <a
              className="moreInfo"
              href="https://edgar-jallier.github.io/P3-Ohmyfood/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer
              <div className="icon-link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          </div>
        </div>

        {/* Carte Booki */}

        <div
          className="container"
          onMouseMove={(ev) => handleMouseMove2(ev)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
        >
          <div className="couleur-card">
            <div className="logo">
              <div className="fond-couleur"></div>
              <img src={logoBooki} alt="logo" className="img-logo" />
            </div>

            <div className="infos">
              <div className="infos-underline"></div>
              <h4 className="infos-description">
                Transformation d'une maquette en site web totalement responsive.
              </h4>
              <h3>Langages utilisés :</h3>
              <div className="langages-position">
                <div className="langages-infos">
                  <img className="logo-langage" src={logoHTML} alt="HTML" />
                  <p>HTML</p>
                </div>
                <div className="langages-infos">
                  <img className="logo-langage" src={logoCSS} alt="CSS" />
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <a
              className="moreInfo"
              href="https://edgar-jallier.github.io/P2-Booki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorer
              <div className="icon-link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
