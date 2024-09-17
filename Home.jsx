import React from 'react'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
     <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 banner_img">
 <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-6 d-flex align-item-center"> 
      {/*<h1 className='banner_text'>Find the most exciting startup jobs</h1>*/}
    </div>
    <div className="col-sm-4"></div>
    <h1 className='typewriter_hero'>
     <Typewriter
  options={{
    strings: ['find the most executing startup jobs'],
    autoStart: true,
    loop: true,
  }}
/>
     </h1>
 </div>
            </div>
        </div>
      </div>
   
     </>
  )
}

export default Home
