
import { Component } from 'react';
import Headers from "./../components/header"
import Footer from "./../components/footer"
import "./../Css/home.css"

 import  travel from "../Images/traveller.jpg"
class Profile extends Component{

    render()
        {
    
            return(
                <>
                <Headers/>
                 <img  src={travel} alt="Traveling Is Hurting." className="travel"/>
                 <Footer/>
                </>
            )
        }
    }

export default Profile
