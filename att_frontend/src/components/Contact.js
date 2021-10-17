import React from 'react'
import "../css/Contact.css"

const Contact = () => {
    return (
        <>
            <section className="main-prim">
                <div className="main-sub-one">
                    FoodyOne
                </div>
                <div className="main-sub-two">
                    <div className="main-sub-contact">
                        <i className="fa fa-phone" ></i>
                        <a>Mobile Number 8287******</a>
                    </div>
                    <div className="main-sub-contact">
                        <i class="fa fa-envelope"></i>
                        <a>harsharora0703@gmail.com</a>
                    </div>
                </div>
            </section>
            <span id="contact-1">Get In Touch</span>
            <div className="main-header-primary-contact">
            <section className="header-primary-contact">

                <div className="user-details-1">
                    <input required="requried" placeholder="First Name" id="first-input" />
                    <input required="requried" placeholder="Last Name" id="first-input" />
                </div>
                <div className="user-details-1">
                    <input required="requried" placeholder="Phone Number" id="first-input" />
                    <input required="requried" placeholder="Email ID" type="email" id="first-input" />
                    <textarea  maxLength="402" className="message-area"></textarea>
                </div>
                <button>Sumit Query</button>
               
            </section>
        
            <section className="header-primary-contact-2">
      
           <span> Get Social </span><br></br>
           <div className="contact-elements">
           <i class="social-span fa fa-facebook-f" ></i>
           <i class="social-span fa fa-twitter" ></i>
           <i class="social-span fa fa-instagram" ></i>
           <i class="social-span fa fa-google-plus" ></i>
           </div>

           <span> Phone Number </span><br></br>
           <div className="contact-elements">
           <i class="social-span fa fa-phone" >
              <i>8287145********</i>
           </i>
           </div>

           <span> Phone Number </span><br></br>
           <div className="contact-elements">
           <i class="social-span fa fa-envelope" >
              <i>support@foodyone.com</i>
           </i>
           </div>

           <span> Address </span><br></br>
           <div className="contact-elements">
           <i class="social-span fa fa-map-marker" >
              <i>6036 NH1 Highway </i>
           </i>
           </div>
           
            
            </section>
</div>
        </>
    )
}

export default Contact;