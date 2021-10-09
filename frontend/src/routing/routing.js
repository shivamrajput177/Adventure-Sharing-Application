import { BrowserRouter, Route } from "react-router-dom";
import Login from "../user/login";
import Signup from "../user/signup";
import Exploreuser from '../user/exploreuser';
import Home from "./../user/home"
import Profile from "../user/profile";

import { Component } from "react";

class Routing extends Component{

    render()
{
return(

 <>
 <BrowserRouter>

 <Route path="/" component={Home} exact/>
 <Route path="/home" component={Home} exact/>
 <Route path="/register" component={Signup} exact/>
 <Route path="/login" component={Login} exact/>
 <Route path="/exploreuser" component={Exploreuser} exact/>
 <Route path="/profile"   component={Profile} exact/>

</BrowserRouter>
</>
)
}
}
export default Routing;