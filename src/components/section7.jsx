import React from 'react'
import { User } from 'lucide-react';

const Section7 = () => {
  return (
  <>
  <section className="teamSection">
      <div className="teamHeader">
        <h2>Our team</h2>
        <p>Failure will never overtake me if my determination to succeed is strong enough.</p>
      </div>
      <div className="teamImage">
        <User size={100} color="#D3D7E0" />
      </div>
      <div className="teamMembers">
        <div className="memberCard">
          <User size={40} color="#D3D7E0" />
          <h3 className="memberName">Igor Antonovich</h3>
          <p className="memberRole">CEO</p>
        </div>
        <div className="memberCard">
          <User size={40} color="#D3D7E0" />
          <h3 className="memberName">Hemchandra Chakravorty</h3>
          <p className="memberRole">CO-FOUNDER</p>
        </div>
        <div className="memberCard">
          <User size={40} color="#D3D7E0" />
          <h3 className="memberName">Harrison Phillips</h3>
          <p className="memberRole">DESIGNER</p>
        </div>
        <div className="memberCard">
          <User size={40} color="#D3D7E0" />
          <h3 className="memberName">Rahul Malviya</h3>
          <p className="memberRole">WEB DEVELOPER</p>
        </div>
        <div className="memberCard">
          <User size={40} color="#D3D7E0" />
          <h3 className="memberName">Marama Petera</h3>
          <p className="memberRole">WEB DEVELOPER</p>
        </div>
        <div className="memberCard">
          <User size={40} color="#D3D7E0" />
          <h3 className="memberName">Jesus Bañuelos</h3>
          <p className="memberRole">DESIGNER</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default Section7
