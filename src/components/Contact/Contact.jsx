import "../../styles/Contact.scss"
import emplacement from "../../assets/chemin-pointillé.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import logoCV from "../../assets/logo-cv.png"

function Contact () {
    return (
        <section className="structure-contact">
            <div className="position-contact">
                <div className="div-trajet">
                    <img src={emplacement} alt="emplacement" />
                </div>
                <div className="infos-contact">
                    <p>Félicitation vous êtes arrivé à destination !</p>
                    <p className="paragraphe-spe">Il ne reste qu'une étape :</p>
                    <div className="div-boutton">
                        <a className="boutton-contact" href="mailto:edgarjallier@gmail.com"><span>Me contacter</span></a>
                    </div>
                    <p id="mail">edgarjallier@gmail.com</p>
                </div>
                <footer className="footer">
                    <nav>
                        <ul className="footer-position-logo">
                            <li><a href="https://www.linkedin.com/in/edgar-jallier/"><div className="logo-link"><FontAwesomeIcon icon={faLinkedinIn} /></div></a></li>
                            <li><a href="https://github.com/Edgar-JALLIER"><div className="logo-link"><FontAwesomeIcon icon={faGithub} /></div></a></li>
                            <li><a href="CV-Edgar-Jallier.pdf"><div className="logo-link"><img src={logoCV} alt="CV" /></div></a></li>
                        </ul>
                    </nav>
                    <p className="footer-text">© Edgar Jallier 2022 - Développeur web</p>
                </footer>
            </div>
        </section>
        
    )
}

export default Contact