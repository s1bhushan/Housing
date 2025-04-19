import React, { Component } from "react";

import JSON from './jsonfile/Broker.json';
import Brokerlist from "./Brokerlist";

class Brokerview extends Component{
    constructor(){
        super();
        this.state={
           
            products: JSON
        }
    }
    render(){
        
        return(      
        <div>
        <Brokerlist prodlist={this.state.products}/>
        </div>
        )
    }
}
export default Brokerview;