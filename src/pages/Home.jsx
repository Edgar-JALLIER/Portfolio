import Card from "../components/Card/Card"
import Header from "../components/Header/Header"
import "../styles/Home.scss"


function Home () {    
    return (
        <div>
            <Header />
                <Card />
               
                {/* {projetList.map (({logo, description,id}) => 
                (<Card logo = {logo} key={id}/>)
                )} */}
                
        </div>      
    )
}

export default Home