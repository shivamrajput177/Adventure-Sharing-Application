import { Component } from 'react'
import Headers from  "../components/header"
import Footer from   "../components/footer"
import "./../Css/login.css"

class Signup extends Component
{

    render()
    {
    return(
       
        
         <>
        <Headers/>

        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Signup To Start The Joruney.</h2>
                         <form className="register-form" id="register-form" action="/post" method="POST">
                             <div className="form-group">

                                 <div className="com">
                                 <label htmlFor="name">
                                     <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                </div>

                                <div className="com">
                                 <input type="text" name="name" id="name" autoComplete="off"
                                 placeholder="Your Name"></input>
                                </div>

                              </div>

                              <div className="form-group">

                                  <div className="com">
                                 <label htmlFor="email">
                                     <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                </div>

                                <div className="com">
                                 <input type="text" name="email" id="email" autoComplete="off"
                                 placeholder="Your Email"></input>
                                 </div>

                                </div>

                               <div className="form-group">
                                 <div className="com"> 
                                <label htmlFor="phone">
                                     <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                </div>

                                <div className="com">
                                 <input type="number" name="phone" id="phone" autoComplete="off"
                                 placeholder="Your Phone"></input>
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
                                 
                                <div className="form-group">
                                <div className="com">
                                <label htmlFor="cpassword">
                                     <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                </div>

                                 <div className="com">
                                 <input type="password" name="cpassword" id="passwird" autoComplete="off"
                                 placeholder="Confirm Your Password"></input>
                                 </div>

                                </div>

                            <div className="form-group form-button ">
                                {/* <input type="submit" name="signup" id="signup" className="form-submit" 
                                value="register"/> */}
                                <button className="btn btn-outline-dark" name="collect" >Submit</button>
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
    
}

export default Signup;