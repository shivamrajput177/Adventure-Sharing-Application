import axios from 'axios'
import { Component } from 'react'
import Headers from  "../components/header"
import Footer from   "../components/footer"
import "./../Css/login.css"


class  Signup extends Component
{


state= {
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""

}

//   componentDidMount()
//   {

//     console.log(this.state.name);
//     axios.post("http://localhost:5000/api/user/register",{
      
//      name: this.state.name,
//      email: this.state.email,
//      phone: this.state.phone,
//      password: this.state.password,
//      cpasspword: this.state.cpassword
//     })
//     .then((response)=>
//     {   
//         if(response.status===200)
//         {
//         console.log(response);
//         }
//         else
//         {
//             console.log("Unsuccessfull");
//         }


//     })
//     .catch((error)=>{
//         console.log(error);
//     })
    
//   }

render(){
    
    return(
    
         <>
        <Headers/>

        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Signup To Start The Joruney.</h2>
                         <form className="register-form" id="register-form" action="http://localhost:5000/api/user/register" method="POST"  >
                             <div className="form-group">

                                 <div className="com">
                                 <label htmlFor="username">
                                     <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                </div>

                                <div className="com">
                                 <input type="text" name="username" id="username" autoComplete="off"
                                 
                                 
                                 onChange={(event)=>{
                                     this.setState({
                                       username: event.target.value
                                     })
                                 }}
                                 placeholder="Your UserName"></input>
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
                                 
                                 onChange={(event)=>{
                                 this.setState({
                                    email: event.target.value
                                    })
                                }}
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
                                   onChange={(event)=>{
                                    this.setState({
                                      phone: event.target.value
                                    })
                                }}
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
                                 onChange={(event)=>{
                                    this.setState({
                                      password: event.target.value
                                    })
                                }}
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
                                 onChange={this.handleInput=(event)=>{
                                    this.setState({
                                      cpasspword: event.target.value
                                    })
                                }}
                                placeholder="Confirm Your Password"></input>
                                 </div>

                                </div>

                            <div className="form-group form-button ">
                                {/* <input type="submit" name="signup" id="signup" className="form-submit" 
                                value="register"/> */}
                                <button className="btn btn-outline-dark" name="collect"value="login" >Submit</button>
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