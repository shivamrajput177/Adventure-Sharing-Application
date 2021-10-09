import { Component } from 'react';
import Headers from "../components/header"
import Footer from "../components/footer"
import traveling from "./../Images/traveller.jpg"
class Home extends Component{

render()
    {
    
        return(
            <>
            <Headers/>
            <img src={traveling} alt="traveling" className="back-img"/>
            <Footer/>
            </>
        )
    }
}

export default Home;