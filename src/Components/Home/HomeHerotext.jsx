import React from 'react'
import Video from './video'

const HomeHerotext = () => {
  return (
    <div className='font-[font1] p-5 text-center'>
  <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9.5vw]'>
    L'étincelle

  </div>
   
  <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9.5vw]' >
    qui
    <div className='h-[8vw] rounded-full overflow-hidden'>
      <Video/>
      </div>
      génère
      </div>
    
  <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9.5vw]' >la CREATIVITE</div>
    
      
    </div>
  )
}

export default HomeHerotext
