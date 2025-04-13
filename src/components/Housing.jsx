import React,{Component} from "react";

import JSON from './jsonfile/Flats.json';
import HousingList from './HousingList';
 
class Housing extends Component{
    constructor(){
        super();
        this.state={
            title: 'High-demand projects to invest now',
            info:'Leading projects in high demand',
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
            <HousingList prodlist={this.state.products}/>
            </div>
            </section>
        )
    }
}
export default Housing;