import React from 'react'
import ChildImg from '../assets/Images/Child_Img.png'

const Intro = () => {
  return (
    <div className="Intro_Container">
        <div className="Intro_Details">
            <p>Join us to celebrate</p> <br />
            <div className="text">
                <h1>Mia's</h1>
                <h3>5th Birthday Party !</h3>
            </div>

            <br />
            
            <p>Sunday Jan 12th <br /> 
            from 2:00PM
            </p>

            <br />

            <p>456,Colony Near Hightech City <br />
            Hyderbad,522004.
            </p>
            <img src={ChildImg} alt="" />
        </div>
    </div>
  )
}

export default Intro