import { Component } from "react"
import Headers from  "./../components/header"
import Footer from   "./../components/footer"
import Card from "./../uploads/Card"
import date from "./../Date"

class Exploreuser extends Component{

    render()
    {

        return(

            <>
            <Headers/>
            <h1>{date.getDate()}</h1>
            <h2> {date.getDay()}</h2>
            <h3>{date.getMonth()}</h3>
            <h4>{date.getMonthcount()}</h4>
            {/* <h1>I am Akash Kumar</h1> */}

            <Card/>
            <Footer/>
            </>
        )

    }
}


export default Exploreuser