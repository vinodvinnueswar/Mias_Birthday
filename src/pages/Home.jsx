import React from 'react'
import Intro from '../components/Intro'
import Invite_Details from '../components/Invite_Details'
import Date_Time from '../components/Date_Time'
import Location from '../components/Location'
import Photo_Gallery from '../components/Photo_Gallery'
import Best_Wishes from '../components/Best_Wishes'
import Social_Share from '../components/Social_Share'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='Home'>
        <div className="Home-page">
        <Intro/>
        <Invite_Details/>
        <Date_Time/>
        <Location/>
        <Photo_Gallery/>
        <Best_Wishes/>
        <Social_Share/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home