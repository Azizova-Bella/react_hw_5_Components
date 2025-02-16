import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react';

const Section4 = () => {
  return (
   <>
 <section className='contactSection'>
      <div className='contactContainer'>
        <div className='contactInfo'>
          <h2>Contacts</h2>
          <p>
            Learn To Love Growth And Change And You Will Be A Success.
            Microsoft Patch Management For Home Users. The situation is different, 
            but the conflict feels the same.
          </p>
        </div>
        <div className='contactDetails'>
            <div className="phone">

          <p>
            <MapPin className='icon'/> 
            1772 Nevskaya Street NW, <br/>
            Suite 21389, Atlanta, GA <br/>
            902344
          </p>
            </div>
            <div className="email">


          <p>
            <Phone className='icon'/> 
            +1 789 123456
          </p>
          
            <Mail className='icon'/> 
            <a href="mailto:hello@containers.kit" className='emailLink'>
              hello@containers. <br />kit
            </a>
         
            </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Section4
