import React from "react";
import { Route, BrowserRouter as Router,Routes,Link } from "react-router-dom";

import HousingEdge from "../components/HousingEdge";
import NewsEdge from "../components/NewsEdge";
import Housing from "../components/Housing";


function Home(){
    return(

        <div>
       
<div className="blackfieldfornav">

</div>


   <div id="carouselExampleDark" className="carousel carousel-dark slide">
 <div className="carousel-indicators">
   </div>
 <div className="carousel-inner">
   <div className="carousel-item1 active" data-bs-interval="10000">
     <img src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
     <div className="carousel-caption d-none d-md-block">
       <section className="hero" >

           <div className="container">
             <h1>Properties to buy in Pune</h1>
             <p>6K+ listings added daily and 97K+ total verified</p>
             <div className="tabs">
               <a href="#" className="active">BUY</a>
               
               <a href="#">RENT</a>
               <a href="#">COMMERCIAL</a>
               <a href="#">PG/CO-LIVING</a>
               <a href="#">PLOTS</a>
             </div>
             <div className="search-bar">
               <input type="text" placeholder="Pune"/>
               <input type="text" placeholder="Search for locality, landmark, project or builder"/>
               <button>Search</button>
             </div>
             <div className="popular-localities">
               <p>Popular Localities</p>
               <a href="#">Baner </a>
               <a href="#">Wakad </a>
               <a href="#">Ravet </a>
               <a href="#">Kharadi </a>
               <a href="#">Hadapsar </a>
             </div>
             <div className="owner-message">
               <p>Are you a Property Owner? <a href="#">Sell/Rent for FREE </a></p>
             </div>
           </div>
         </section>
     </div>
   </div>
     </div>

    {/* Housing Edge */}
   <HousingEdge/>
  
  
   <section className="listings1">
       <div className="button_ex1">
       <h3>Housing's Top Picks</h3>
       <h5>Explore top leving options with us</h5>
       
       <button type="button"><img src="https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/small/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg"/> </button>
       </div>

       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-inner">
               
               {/* <!-- First Slide --> */}
               <div className="carousel-item active">
                   <div className="d-flex align-items-center justify-content-center">
                       <div className="card ms-3">
                           <img src="https://housing-images.n7net.in/0b8ad14c/30c89a614db6e35f49f8af7efd2904da/v0/medium.jpg" alt="..." className="card-img-top"/>
                           <div className="card-body">
                               <h5 className="card-title">Shubh Developer</h5>
                               <p className="card-text"><b>Shubh Nirvana</b><br/>Viman Nagar, Pune<br/><br/>
                                   <b>Rs.2.11 Cr - 3.85 Cr</b><br/>3, 4, 4.5 BHK Apartments
                               </p>
                               <a href="#" className="btn btn-primary">Contact</a>
                           </div>
                       </div>
                       
                       <img src="https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg" 
                           className="d-block w-70 ms-3" alt="..."/>
                   </div>
               </div>
       
               {/* <!-- Second Slide --> */}
               <div className="carousel-item">
                   <div className="d-flex align-items-center justify-content-center">
                       <div className="card ms-3">
                           <img src="https://housing-images.n7net.in/0b8ad14c/0422e82d79bbc13a5190b118db34b6c5/v8/medium.jpg" alt="..." className="card-img-top"/>
                           <div className="card-body">
                               <h5 className="card-title">Nyati Group</h5>
                               <p className="card-text"><b>Nyati Evoque</b><br/>Kalyani Nagar, Pune<br/><br/>
                                   <b>2.11 Cr - 3.85 Cr</b><br/>3, 4 BHK Apartments
                               </p>
                               <a href="#" className="btn btn-primary">Contact</a>
                           </div>
                       </div>
       
                       <img src="https://housing-images.n7net.in/4f2250e8/98a7bee983767b5cd8406fb6d7feca13/v0/fs/nyati_emerald-baner-pune-nyati_group.jpeg" className="d-block w-70 ms-3" alt="..."/>
                   </div>
               </div>
       
               {/* <!-- Third Slide --> */}
               <div className="carousel-item">
                   <div className="d-flex align-items-center justify-content-center">
                       <div className="card ms-3" >
                           <img src="https://housing-images.n7net.in/0b8ad14c/4c205ebb0ca79b9e49053a940f845edb/v0/medium.jpeg" alt="..." className="card-img-top"/>
                           <div className="card-body">
                               <h5 className="card-title">Shree Venkatesh Buildcon</h5>
                               <p className="card-text"><b>Venkatesh Erandwane</b><br/>Erandwane, Pune<br/><br/>
                                   <b>2.11 Cr - 3.85 Cr</b><br/>3, 4, 4.5 BHK Apartments
                               </p>
                               <a href="#" className="btn btn-primary">Contact</a>
                           </div>
                       </div>
       
                       <img src="https://housing-images.n7net.in/4f2250e8/ccbe5d43d9bfd90ea43e173c853a9efa/v0/fs/venkatesh_erandwane_central-erandwane-pune-shree_venkatesh_buildcon.jpeg" 
                           className="d-block w-70 ms-3" alt="..."/>
                   </div>
               </div>
       
           </div>
       
           
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
           </button>
       
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
           </button>
       </div>
       
   </section>

   <section className="listings1">

   <div className="button_ex1">
       <h3>Top highlighted projects</h3>
       <h5>Noteworthy projects to watch</h5>
       
       </div>

   <div className="property1">
       <img src="https://housing-images.n7net.in/4f2250e8/72ae45f4a91492703fb28bc5c979d061/v0/large/209_hadapsar-hadapsar-pune-lohia_jain_malpani_properties.jpeg" className="card-img1" alt="..."/>
       
         <h5 className="card-title">News</h5>
         <p className="card-text">Kolte-Patil, Blackstone partner to drive residential realty growth in India
          </p>
         <p className="card-text"><small> According to the partnership, Blackstone will acquire up to 66% stake in KPDL for a commitment of Rs 1,800 crore.</small></p>
       
     </div>


   </section>

   <section className="listings1">

       
   <div className="button_ex1">
       <h3>Featured Developers
       </h3>
       <h5>Prominent real-estate builders
       </h5>
       
       </div>

       

{/* 
<!--Card add--> */}

<div id="carddiv">
<div id="card11">
   <img src="https://housing-images.n7net.in/0b8ad14c/0422e82d79bbc13a5190b118db34b6c5/v8/thumb.jpg" className="card-img" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Nayati Group</h5>
     <p className="card-text">At Nyati Group, the customer is the central focus of all our ventures. We put an earnest effort in understanding the aspirations of our buyers with the objective of meeting all their expectations.We believe there is no greater joy.</p>
   </div>
   <ul className="list-group list-group-flush">
     <li className="list-group-item">Year Estb 1997</li>
     <li className="list-group-item">Project : 100</li>
   </ul>
   
   <div className="card-body">

   
     <a href="#" className="card-link"><img src="https://housing-images.n7net.in/4f2250e8/98a7bee983767b5cd8406fb6d7feca13/v0/medium/nyati_emerald-baner-pune-nyati_group.jpeg"/></a>
     
   </div>
 </div>
 
{/* <!--Secand Card--> */}



<div id="card11">
   <img src="https://housing-images.n7net.in/0b8ad14c/aaa73698fca43f08496cfcdd6958c252/v0/thumb.png" className="card-img" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Lohia Jain Malpani Properties</h5>
     <p className="card-text">LJM Properties LLP is a partnership firm comprising Lohia Jain Group and Malpani Properties, with 11+ years of experience in the field. We provide well-planned and exceptionally executed commercial & residential spaces in Pune city.</p>
   </div>
   <ul className="list-group list-group-flush">
     <li className="list-group-item">Year Estb 2013</li>
     <li className="list-group-item">Project : 6</li>
   </ul>
   
   <div className="card-body">

   
     <a href="#" className="card-link"><img src="https://housing-images.n7net.in/4f2250e8/2751a00a994070d90ff141c7c3f5fef7/v0/medium/the_reserve-mundhwa-pune-lohia_jain_malpani_properties.jpeg"/></a>
     
   </div>
 </div>
 


 
{/* <!--Third Card--> */}



<div id="card11">
   <img src="https://housing-images.n7net.in/0b8ad14c/3ee82f69b558361c0f7e365fc0583f25/v2/thumb.jpg" className="card-img" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Mantra Properties</h5>
     <p className="card-text">Mantra Properties has been successfully engaged in land acquisition and development of landmark properties. With a team of skilled professionals and qualified engineers, this Real Estate Company ensures superior construction.</p>
   </div>
   <ul className="list-group list-group-flush">
     <li className="list-group-item">Year Estb 2007</li>
     <li className="list-group-item">Project : 133</li>
   </ul>
   
   <div className="card-body">

   
     <a href="#" className="card-link"><img src="https://housing-images.n7net.in/4f2250e8/98a7bee983767b5cd8406fb6d7feca13/v0/medium/nyati_emerald-baner-pune-nyati_group.jpeg"/></a>
     
   </div>
 </div>
 

 
</div>

   </section>
{/* News Instance */}

<NewsEdge/>


   <Housing/>
{/* Contact */}
   <section className="contact">
       <h2>Contact Us</h2>
       <form>
           <input type="text" placeholder="Your Name" required/>
           <input type="email" placeholder="Your Email" required/>
           <textarea placeholder="Your Message" required></textarea>
           <button type="submit">Send Message</button>
       </form>
   </section>
   
   <footer>
       <p>&copy; 2025 Housing Clone. All Rights Reserved.</p>
   </footer>
</div>



        </div>
    )
}

export default Home;
