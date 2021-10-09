
import { Component } from 'react';

import "../Css/footer.css"

class Footer extends Component{

render()
    {

        return(
            <>
             <div class="blogfooter">

             <div className="footer-left">   
             <i class="zmdi zmdi-github"> <a href="https://github.com/" target="_blank" className="footer-link">Github</a></i>
             <i class="zmdi zmdi-facebook"><a href="https://www.facebook.com/" target="_blank" className="footer-link">Facebook</a></i>
             <i class="zmdi zmdi-instagram"><a href="https://www.instagram.com/" target="_blank" className="footer-link">Instagram</a></i>
             <i class="zmdi zmdi-twitter-box"><a href="https://www.twitter.com/" target="_blank" className="footer-link">Twitter</a></i>
             </div>

             <div className="footer-right">
             @Start Travel With Akash Musk
             </div>
             </div>
            </>
        )
    }
}

export default Footer;