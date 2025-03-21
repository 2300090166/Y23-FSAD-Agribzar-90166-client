
import React from 'react'
import ab1 from '../components/images/ab1.jpg'
import ab3 from '../components/images/ab3.jpg'
import video from '../components/videos/video.mp4'
const Home = () => {
  return (
    <div>
      <h2 style={{color:'black'}}>Welcome to AgriWorld! </h2>
      <img src={ab1} height={200} width={200}/>
      <img src={ab3} height={200} width={200}/>
    </div>
  )
}

export default Home

