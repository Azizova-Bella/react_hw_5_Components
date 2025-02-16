import React from 'react'
import icon from "../assets/Picture.png"
const Section2 = () => {
  return (
<>
<section className="testimonial-section">
      <div className="testimonial-box">
        <div className="testimonial-arrow left-arrow">❮</div>
        <div className="testimonial-content">
          <div className="testimonial-icon"><img src={icon} alt="" /></div>
          <h3>Santiago Valentín</h3>
          <p className="role">CONTENT MANAGER</p>
          <p className="message">
            The only moment, the only life we have is in the NOW. What happened
            a few moments or several years ago is gone, what will happen this
            evening, or next month when we go on holidays is not here yet.
          </p>
          <div className="dots">
            <span className="active-dot">●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
        </div>
        <div className="testimonial-arrow right-arrow">❯</div>
      </div>
    </section>
</>
  )
}

export default Section2
