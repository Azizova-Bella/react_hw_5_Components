import React from 'react'

const Footer = () => {
  return (
  <>
  <footer className="footerSection">
      <div className="footerContainer">
        <div className="footerColumn">
          <h3 className="footerTitle highlight">Containers</h3>
        </div>
        <div className="footerColumn">
          <h3 className="footerTitle">Products</h3>
          <ul>
            <li>Pricing</li>
            <li>Teams</li>
            <li>Education</li>
            <li>Refer a friend</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3 className="footerTitle">About</h3>
          <ul>
            <li>Stories</li>
            <li>Community</li>
            <li>Blog</li>
            <li>
              Careers <span className="newTag">NEW</span>
            </li>
            <li>Brand Assets</li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3 className="footerTitle">Newsletter</h3>
          <p>Receive special offers and get our latest updates.</p>
          <form className="newsletterForm">
            <input type="email" placeholder="Enter e-mail" />
            <button type="submit">JOIN</button>
          </form>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Footer
