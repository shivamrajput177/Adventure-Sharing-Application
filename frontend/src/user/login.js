import axios from 'axios'

import Headers from  "../components/header"
import Footer from   "../components/footer"
import   "./../Css/signup.css"


const Login=()=>
{
 
    
  return(
   <>
   <Headers/>
            <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">SignIn</h2>
                         <form className="register-form" id="register-form" action="/profile" method="GET">
                             

                              <div className="form-group">

                                  <div className="com">
                                 <label htmlFor="name">
                                     <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                </div>

                                <div className="com">
                                 <input type="text" name="name" id="name" autoComplete="off"

                                 

                                 placeholder="Enter Your User_id"></input>
                                 </div>

                                </div>

                          
                                <div className="form-group">
                                <div className="com">  
                                <label htmlFor="password">
                                     <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                </div>

                                <div className="com">
                                 <input type="password" name="password" id="password" autoComplete="off"
                                 
                                 placeholder="Your Password"></input>
                                 </div>
                                 </div>
                                 
                                

                            <div className="form-group form-button ">
                               
                                <button className="btn btn-outline-dark" name="collect" >Sigin</button>
                            </div>

                           </form>
                         </div>
                        

                </div>
            </div>
        </section>

            
 <Footer/>
  </>
      )
    
    
}

export default Login;