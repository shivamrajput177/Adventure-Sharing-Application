import { Component } from "react";
import axios from "axios";
import date from "../Date"
import "./../Css/card.css"


    // state= {
    
    //     img_url: [],
    //     place: "NIT_DELHI",
    //     Date:  "",
    //     status: "",
    //     name:  "",
    //     user_pic: "",
    //     spend:  " ",
    //     time_req: "",
    //     end: "",
    //     start: "",
    //     description: ""
    // }

class Card extends Component{
    state= {
        postlist: ["frontend/src/Images/front.jpg"]
    }

    componentDidMount(){
       
     //data will come from the backend...
        axios.get("http://localhost:3001/list/bollywood",{

            //passing parameters to the backend.
           
            params: {
                "Name": "Akash",
                "City": "Bakhtiyarpur"
            }
       })


       .then((response)=>{
        console.log(response.data)
        this.setState({
            postlist: response.data
        })

       })

       .catch((err)=>{
           console.log(err);
       })

        console.log("Fetching Data");
    }

    render()
    {
        return(

         <>
          <div className="card-heading">


        {
          this.state.postlist.map((item)=>(

            // <div>
            //     <h1>{item.place}</h1>
            // </div>
                <div  key={item.id}   >
                  <div className="card-subheading">
                   <h4>{item.place} Nit Delhi</h4>
                   <h4>12:04-12:10</h4>
                  </div>
                  <p> {item.Review} It's really a nice place to study. </p>
                  <p>6 minutes ago</p>
                  <img src={item.img_url} alt="loading" className="card-img"/>
                   </div>
          ))}
          </div>
         </>
        )
    }
}

export default Card;