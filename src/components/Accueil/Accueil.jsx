import "../../styles/Accueil.scss"
import Photo from "../../assets/PP.jpg"
import MovingComponent from 'react-moving-text'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"

import logoCV from "../../assets/logo-cv.png"
import logoHTML from "../../assets/logo-langage/HTML5_logo.png"
import logoCSS from "../../assets/logo-langage/CSS3_logo-redim.png"
import logoSass from "../../assets/logo-langage/Sass.png"
import logoJS from "../../assets/logo-langage/JavaScript-logo.png"
import logoNodeJs from "../../assets/logo-langage/nodeJs.png"
import logoMongoDB from "../../assets/logo-langage/mongodb.png"
import logoExpress from "../../assets/logo-langage/express.png"
import logoReact from "../../assets/logo-langage/react.png"
import logoReactRouter from "../../assets/logo-langage/react-router.png"




function Accueil () {
    return (<section className="structure">
       <div className="presentation">
        <div className="photo-profil-div">
            <img className="photo-profil" src={Photo} alt="Portrait de Edgar" />
            <div className='typewriter-text'>
                <MovingComponent type="typewriter"
                    dataText={[
                        "Besoin d'un alternant ?",
                        //"Vous êtes dans la bonne direction",
                        "Découvrez qui je suis !"
                    ]} />
            </div>
            <div className="links">
                <a href="https://www.linkedin.com/in/edgar-jallier/"><div className="link link--linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></div></a>
                <a href="https://github.com/Edgar-JALLIER"><div className="link link--github"><FontAwesomeIcon icon={faGithub} /></div></a>
                <a href="CV-Edgar-Jallier.pdf" download="CV-Edgar-JALLIER"><div className="link link--CV"><img src={logoCV} alt="CV" /></div></a>
            </div>
        </div>
        <div className="div-name-link">
            <h2 className="name">Edgar Jallier</h2>
        </div>


        <p className="paragraphe">
           Bienvenue ! <br />
           Web Développeur en devenir, j'ai l'envie de progresser à travers une alternance de 2 ans pour approfondir mes connaissances en React.
           <span className="shine"> Autonome</span>, je sais <span className="shine"> m'adapter</span> au sein de projets et <span className="shine"> travailler en équipe</span> de manière <span className="shine"> rigoureuse</span>.
        </p>
        <ul className="langages">
            <li className="langage"><img src={logoHTML} alt="logo HTML" /></li>
            <li className="langage"><img src={logoCSS} alt="logo CSS" /></li>
            <li className="langage"><img src={logoSass} alt="logo Sass" /></li>
            <li className="langage"><img src={logoJS} alt="logo JavaScript" /></li>
            <li className="langage"><img src={logoNodeJs} alt="logo NodeJs" /></li>
            <li className="langage"><img src={logoMongoDB} alt="logo MongoDB" /></li>
            <li className="langage"><img src={logoReact} alt="logo React" /></li>
        </ul>
       </div>
       <div className="arrow-down">
            <a href="#Projet"><FontAwesomeIcon icon={faChevronDown} /></a>
        </div>
    </section>
    )
}

export default Accueil