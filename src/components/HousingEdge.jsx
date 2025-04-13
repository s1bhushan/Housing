import React,{Component} from "react";

import JSON from './jsonfile/Edge.json';

import HousingEdgeList from "./HousingEdgeLIst";

class HousingEdge extends Component{

    constructor(){
        super();
        this.state={
            title: 'Housing Edge',
            info:'Explore property related services',
            products: JSON

        }

        
    }

    render(){
        return(

            

            <section className="listings">
            <div>
                  <div className="button_ex">
       <h3>Featured Properties</h3>
       <h5>Explore property related services</h5>
       
       <button type="button" className="btn btn-outline-primary">Explore services </button>
       </div>
                <HousingEdgeList hlist={this.state.products}/>


            </div></section>


        )
    }

}
export default HousingEdge;