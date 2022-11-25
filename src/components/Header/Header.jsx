import "../../styles/Header.scss"
import logoEdgar from "../../assets/Edgar2.PNG"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCode} from "@fortawesome/free-solid-svg-icons"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"

function Header () {
    return (
        <header className="header">
            <div className="header-structure">
            <a href="#Accueil">
                <img className="logoSite" src={logoEdgar} alt="logo du site"/>
            </a>
                <nav className="navBarre">
                    <ul>
                        <li><a className="navBarre-text" href="#Accueil">Accueil </a><a className="navBarre-logo" href="#Projet"><FontAwesomeIcon icon={faHouse} /></a></li>
                        <li><a className="navBarre-text" href="#Projet">Mes projets</a><a className="navBarre-logo" href="#Projet"><FontAwesomeIcon icon={faCode} /></a></li>
                        <li><a className="navBarre-text" href="#Experience">Expériences</a><a className="navBarre-logo" href="#Projet"><FontAwesomeIcon icon={faGraduationCap} /></a></li>
                        <li><a className="navBarre-text" href="#Contact">Contact</a><a className="navBarre-logo" href="#Projet"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header