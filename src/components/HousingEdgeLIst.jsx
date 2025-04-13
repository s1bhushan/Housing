import React from "react";

const HousingEdgeList=(hlist)=>{
   const renderList=({hlist})=>{
    if(hlist){
        return hlist.map((data)=>{
            return(
                <div key={data.id} className="propertymain col-md-3">
                   
                <div className="property">
                <img className="card-img-top" src={data.img} alt={data.title}/>
                    <h4 className="card-title">{data.title}</h4>
                    <div className="card-text">
                        <p className="day">{data.description}</p>
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
            {renderList(hlist)}
        </div>
    </div>
)
}
export default HousingEdgeList;

