import React from "react";

export default function Downloadapp(){
    return(

        <div>

        <div className="blackfieldfornav"> </div>

{/* Code */}


<div id="carouselExampleDark" className="carousel carousel-dark slide">
 <div className="carousel-indicators">
   </div>
 <div className="carousel-side">
    <div className="carousel-side3">
        <h1>Housing on the Go!</h1>
        <h6>Download our top-rated app, made just for you!</h6>
        <h6> It’s free, easy and smart.</h6>
        <input type="number" placeholder="Enter Your Mobile No!!"/>
               
               <button className="sendapp">Send App Link!</button><br/><br/>

               <button type="button" class="btn btn-primary btn-lg">App Store</button>
              <button type="button" class="btn btn-secondary btn-lg">Google Play</button>


    </div>
   <div className="carousel-it3 active" data-bs-interval="10000">
     <img src="https://c.housingcdn.com/supply/s/client/common/assets/appBanner.344ed130.jpg" className="d-block w-100" alt="..."/>
     
   </div>
     </div>


        </div>

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