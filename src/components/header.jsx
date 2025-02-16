import React from 'react'
import device from "../assets/device.png"
const Header = () => {
  return (
<>
<header>
<div className="head">
    <h1>We Connect 
    Startups</h1>
    <div className="next">
        <button className='dowload'>DOWNLOAD</button>
        <button className='try'>TRY FOR FREE</button>
        <p>Harness The Power Of Your Dreams</p>
    </div>

</div>
<div className="img">

<img src={device} alt="" />
</div>
   </header>
<p className='p'>SCROLL TO MORE</p>
</>
  )
}

export default Header
