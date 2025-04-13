import React,{Component} from "react";

import JSON from './jsonfile/News.json';

import HousingEdgeList from "./HousingEdgeLIst";

class NewsEdge extends Component{

    constructor(){
        super();
        this.state={
            title: 'Research and Insights',
            info:'Explore useful real estate insights',
            products: JSON

        }

        
    }

    render(){
        return(

            <section className="listings">
            <div>
                  <div className="button_ex">
       <h3>{this.state.title}</h3>
       <h5>{this.state.info}</h5>
       
       
       </div>
                <HousingEdgeList hlist={this.state.products}/>


            </div></section>


        )
    }

}
export default NewsEdge;