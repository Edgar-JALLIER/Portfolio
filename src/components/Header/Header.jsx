import "../../styles/Header.scss"
import logoEdgar from "../../assets/Edgar4.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCode} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import {faBriefcase} from "@fortawesome/free-solid-svg-icons"

function Header () {
    return (
        <header className="header">
            <div className="header-structure">
            <a href="#Accueil">
                <img className="logoSite" src={logoEdgar} alt="logo du site"/>
            </a>
                <nav className="navBarre">
                    <ul>
                        <li className="deleteMe"><a className="navBarre-text navBarre-text--noir" href="#Accueil">Accueil </a></li>
                        <li><a className="navBarre-text navBarre-text--beige" href="#Projet">Projets</a><a className="navBarre-logo" href="#Projet"><FontAwesomeIcon icon={faCode} /></a></li>
                        <li><a className="navBarre-text navBarre-text--vert" href="#Formation">Formations</a><a className="navBarre-logo" href="#Formation"><FontAwesomeIcon icon={faGraduationCap} /></a></li>
                        <li><a className="navBarre-text navBarre-text--bleu" href="#Experience">Expériences</a><a className="navBarre-logo" href="#Experience"><FontAwesomeIcon icon={faBriefcase} /></a></li>
                        <li><a className="navBarre-text navBarre-text--noir" href="#Contact">Contact</a><a className="navBarre-logo special" href="#Contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header