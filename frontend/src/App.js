import React from 'react'
import Map from './Map/Map'


import Routing from "./routing/routing"

import { Component } from "react";
class App extends Component {
  render(){
  return (
    <>

  <div className="App">  
    
  <Routing/>
  
   </div>
   <div className="App">
      <header className="App-header">
        <Map/>
      </header>
    </div>
   </>
  )
  }
}


export default App;


