import React from "react";


const Brokerlist=(prodlist)=>{
    const renderList=({prodlist})=>{
        if(prodlist){
            return prodlist.map((data)=>{
                return(

                    <div key={data.id} className="card col-md-3">
                    <div className="row">
                        
                        
                        <h3 className="card-title">{data.title}</h3>
                   
                
                <hr/>
                <span className="topTemp"><h5>{data.adven}</h5></span>
                </div>
                <ul class="list-group list-group-flush">
    <li class="list-group-item">{data.info}</li>
    <li class="list-group-item">{data.info}</li>
    <li class="list-group-item">{data.info}</li>
  </ul>
                
                </div>

                
                )
            }


            )
        }

    }

    return(

        <div className="container">
            <div className="row">
                {renderList(prodlist)}
            </div>
        </div>
    )

}

export default Brokerlist;