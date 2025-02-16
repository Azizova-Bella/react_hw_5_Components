import React from "react";
import bag from "../assets/Icon.png"
const Section3 = () => {
  return (
    <>
      <section className="pricingSection">
        <h1>Choose your plan</h1>
        <p>
          There are many reasons to get down and start to get depressed about
          your situation.
        </p>
        <div className="pricingBoxes">
          <div className="pricingBox">
            <h3>Free</h3>
            <h2>$0</h2>
            <p>Free forever</p>
            <p>Up to 2 users</p>
            <p>Github</p>
            <button className="outlineButton">GET STARTED</button>
          </div>
          <div className="pricingBox">
            <h3>Lite</h3>
            <h2>$199</h2>
            <p>Teams</p>
            <p>Up to 8 users</p>
            <p>Github</p>
            <button className="solidButton">BUY NOW</button>
          </div>
          <div className="pricingBox active">
            <h3>PRO</h3>
            <h2>$399</h2>
            <p>Teams</p>
            <p>Unlimited users</p>
            <p>Github</p>
            <button className="solidButton">BUY NOW</button>
          </div>
          <div className="pricingBox">
            <h3>Enterprise</h3>
           <img src={bag} alt="bagg" className="icon" />
            <p>Teams</p>
            <p>Unlimited users</p>
            <p>Github</p>
            <button className="outlineButton">CONTACT US</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
