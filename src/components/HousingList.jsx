import React from "react";



const HousingList=(prodlist)=>{
    const renderList=({prodlist})=>{
        if(prodlist){
            return prodlist.map((data)=>{
                return(
                    <div key={data.id} className="card col-md-3">
                        <div className="row">
                            
                            <img className="card-img-top" src={data.imageUrl} alt={data.title}/>
                       
                    
                    <hr/>
                    <span className="topTemp"><h5>{data.title}</h5></span>
                    </div>
                    <div className="card-body">
                        <span className="max">From ₹ {data.price}</span>
                        <h4 className="card-title">{data.type}</h4>
                        <div className="card-text">
                            <p className="day">{data.availability}</p>
                            </div>
                        </div>
                    </div>
                    

                )
            })
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
export default HousingList;