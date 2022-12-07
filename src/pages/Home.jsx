import Card from "../components/Card/Card"
import Header from "../components/Header/Header"
import Accueil from "../components/Accueil/Accueil"
import Experience from "../components/Experience/Experience"
import Formation from "../components/Formation/Formation"
import Contact from "../components/Contact/Contact"
import "../styles/Home.scss"

function Home () {    
    return (
        <div>
            <Header />
            <div className="global">
                <span id="Accueil"></span>
                <Accueil />
                <span id="Projet"></span>
                <Card />
                <span id="Formation"></span>
                <Formation />
                <span id="Experience"></span>
                <Experience />
                <span id="Contact"></span>
                <Contact />
                {/* {projetList.map (({logo, description,id}) => 
                (<Card logo = {logo} key={id}/>)
                )} */}
           </div>     
        </div>      
    )
}

export default Home