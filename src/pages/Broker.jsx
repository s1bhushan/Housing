import React from "react";
import Brokerview from "../components/Brokerview";

export default function Broker(){
    return(

        <div>

        <div className="blackfieldfornav"> </div>

{/* Code */}

<div id="carouselExampleDark" className="carousel carousel-dark slide">
 <div className="carousel-indicators">
   </div>
 <div className="carousel-inner">
   <div className="carousel-item5 active" data-bs-interval="10000">
     <img src="https://volzero.com/img/article/f660c4d1-8c0e-4e2d-8b48-233cedb6221e_683815.jpg" className="d-block w-100" alt="..."/>
     <div className="carousel-caption d-none d-md-block">
     <section className="hero" >

<div className="container">
  <h1>Want to List your property for sale or rent?</h1>
  <h4>Explore our partner products tailor made just for you</h4>
 
  
  <div className="owner-message">
    <h5>Parr...se Perfect </h5>
  </div>
</div>
</section>
     </div>
   </div>
     </div>



        </div>

        <Brokerview/>

        <div className="lowerside">
<img src="https://c.housingcdn.com/supply/s/client/common/assets/REAGroup.e5435593.png" alt="..."/>

</div>

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
    );
}