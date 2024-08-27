import "../../styles/Accueil.scss";
import Photo from "../../assets/PP.jpg";
import MovingComponent from "react-moving-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import logoCV from "../../assets/logo-cv.png";
import logoHTML from "../../assets/logo-langage/HTML5_logo.png";
import logoCSS from "../../assets/logo-langage/CSS3_logo-redim.png";
// import logoSass from "../../assets/logo-langage/Sass.png";
import logoJS from "../../assets/logo-langage/JavaScript-logo.png";
import logoNodeJs from "../../assets/logo-langage/nodeJs.png";
// import logoMongoDB from "../../assets/logo-langage/mongodb.png";
import logoReact from "../../assets/logo-langage/react.png";
import logoVue from "../../assets/logo-langage/Vue.js_Logo.png";
import logoTS from "../../assets/logo-langage/Typescript_logo.png";
import logoMySql from "../../assets/logo-langage/Mysql_logo.png";

function Accueil() {
  return (
    <section className="structure">
      <div className="presentation">
        <div className="photo-profil-div">
          <img className="photo-profil" src={Photo} alt="Portrait de Edgar" />
          <div className="typewriter-text">
            <MovingComponent
              type="typewriter"
              duration="1s"
              dataText={[
                "Besoin d'un nouveau collaborateur ?",
                "Vous êtes sur la bonne voie !",
              ]}
            />
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/edgar-jallier/">
              <div className="link link--linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </a>
            <a href="https://github.com/Edgar-JALLIER">
              <div className="link link--github">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
            <a href="CV-Edgar-Jallier.pdf">
              <div className="link link--CV">
                <img src={logoCV} alt="CV" />
              </div>
            </a>
          </div>
        </div>
        <div className="div-name-link">
          <h2 className="name">Edgar Jallier</h2>
        </div>

        <p className="paragraphe">
          Bienvenue ! <br />
          Développeur web passionné avec un forte{" "}
          <span className="shine">capacité d'adaptation</span>, et une grande{" "}
          <span className="shine">autonomie</span> acquise par mon apprentissage
          autodidacte et mes expériences professionnelles.{" "}
          <span className="shine">Curieux</span> et{" "}
          <span className="shine">motivé</span>, j'aime constamment apprendre et
          perfectionner mes compétences pour contribuer efficacement aux projets
          sur lesquels je travaille.
        </p>
        <ul className="langages">
          <li className="langage">
            <img src={logoHTML} alt="logo HTML" />
          </li>
          <li className="langage">
            <img src={logoCSS} alt="logo CSS" />
          </li>
          <li className="langage">
            <img src={logoJS} alt="logo JavaScript" />
          </li>
          <li className="langage">
            <img src={logoTS} alt="logo TypeScript" />
          </li>
          <li className="langage">
            <img src={logoReact} alt="logo React" />
          </li>
          <li className="langage">
            <img src={logoVue} alt="logo Vue" />
          </li>
          <li className="langage">
            <img src={logoNodeJs} alt="logo NodeJs" />
          </li>
          <li className="langage">
            <img src={logoMySql} alt="logo MySQL" />
          </li>
        </ul>
      </div>
      <div className="arrow-down">
        <a href="#Projet">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </div>
    </section>
  );
}

export default Accueil;
