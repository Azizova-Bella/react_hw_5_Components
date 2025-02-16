import React from 'react';
import desctop from "../assets/Picture (1).png";
import picc2 from "../assets/Picture (2).png";

const Section5 = () => {
  return (
    <>
      <section className='sectionFive'>
        <div className='part'>
          <h2>Portfolio</h2>
          <p>Failure will never overtake me if my determination to succeed is strong enough.</p>
        </div>
        <div className='pictures'>
          <img src={desctop} alt="Portfolio"/>
          <img src={desctop} alt="Portfolio"/>
          <img src={desctop} alt="Portfolio"/>
          <img className='none' src={desctop} alt="Portfolio"/>
          <img className='none' src={desctop} alt="Portfolio"/>
          <img className='none' src={desctop} alt="Portfolio"/>
        </div>

        <div className='partBlog'>
          <h2>Blog</h2>
          <div className='flexContainer'>
            <div className='boxOne'>
              <img src={picc2} alt="Blog"/>
              <p className='textBold'>The Best Sales Prospect Engine</p>
              <p className='textGray'>Feb 2</p>
            </div>
            <div className='boxTwo'>
              <img src={desctop} alt="Blog"/>
              <p className='textSemiBold'>Digital Creative Director</p>
              <p className='textGray'>Jan 31</p>
            </div>
            <div className='boxTwo'>
              <img src={desctop} alt="Blog"/>
              <p className='textSemiBold'>Unlock Calls</p>
              <p className='textGray'>Jan 15</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section5;
