import React from 'react'
import Video from '../Components/Home/video'
import HomeHerotext from '../Components/Home/HomeHerotext'
import HomeBottomText from '../Components/Home/HomeBottomText'
import { Link } from 'react-router-dom'








const Home = () => {
  return (
    <div>
      
      
      <div className='h-screen w-screen fixed '>

        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeHerotext/>
        <HomeBottomText/>
      
       

      </div>
      <Link to="/agence">Agence</Link>
      <Link to="/project">Project</Link>
    </div>
  )
}

export default Home