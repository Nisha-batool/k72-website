import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <div>
        <Link to="/project"className='text-[6.5vw] border-5 border-white hover:border-[#D3FD50]  rounded-full px-8 upercase'>Project</Link>
        </div>
      <div>
        <Link to="/agence" className='text-[6.5vw] border-5 border-white hover:border-[#D3fD50] rounded-full px-8 upercase'>Agence</Link>
        </div>
      
    </div>
  )
}

export default HomeBottomText
