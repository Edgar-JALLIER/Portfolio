import Card from "../components/Card/Card"
import Header from "../components/Header/Header"
import Accueil from "../components/Accueil/Accueil"
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
               
                {/* {projetList.map (({logo, description,id}) => 
                (<Card logo = {logo} key={id}/>)
                )} */}
           </div>     
        </div>      
    )
}

export default Home