// import React from 'react'

// const projectsCard = (props) => {
//   return (
    
    
//     // <>
//           <div className='w-1/2 group transition-all relative rounded:none hover:rounded-4xl overflow-hidden h-full '>
//           <img className=' h-full w-full object-cover' src="{props.image1}" alt=""/>
//           <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
//             <h2 className='text-3xl font-[font2]  border-4  rounded-full'>vior le projets</h2>
//           </div>
//           </div>

//           <div className='w-1/2 group transition-all relative rounded:none hover:rounded-4xl overflow-hidden h-full '>
//           <img className=' h-full w-full object-cover' src="{props.image2}" alt=''/>
//           <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
//             <h2 className='text-3xl font-[font2]  border-4  rounded-full'>vior le projets</h2>
//           </div>
//           </div>
//           </>
          
          

          
        
      
    
//   )
// }

// export default projectsCard

// import React from 'react'

// 1. Naam bada P se
// const ProjectsCard = (props) => {
//   return (
//     <>
//       {/* // ye hatana hai, agar comment karna hai to aise karo */}
//       <div className='w-full h-[200px] mb-4 flex gap-4'>
//         <div className='w-1/2 group transition-all relative rounded-3xl'>
//           <img className='h-full w-full object-cover' src={props.img1} />
//           <div className='opacity-0 group-hover:opacity-100 absolute top-0...'>
//              <h2 className='text-3xl font-[font2] border-4 rounded-full'>
//                {props.text1}
//              </h2>
//           </div>
//         </div>

//         <div className='w-1/2 group transition-all relative rounded-3xl'>
//           <img className='h-full w-full object-cover' src={props.img2} />
//           <div className='opacity-0 group-hover:opacity-100 absolute top-0...'>
//              <h2 className='text-3xl font-[font2] border-4 rounded-full'>
//                {props.text2}
//              </h2>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ProjectsCard
// filepath: c:\Users\AL REHMAN LAPTOP\Downloads\k72 yt\k72 yt\src\Components\Home\project\ProjectsCard.jsx


// const ProjectsCard = ({ image1, image2 }) => {
//   return (
//     <div className='w-full flex gap-4 mb-4'>
//       <img
//         src={image1}
//         alt='project'
//         className='w-1/2 h-[200px] object-cover rounded-xl'
//       />
//       <img
//         src={image2}
//         alt='project'
//         className='w-1/2 h-[200px] object-cover rounded-xl'
//       />
//     </div>
//   )
// }

// export default ProjectsCard
import React from 'react'

const ProjectsCard = (props) => {
  return (
    <div className='w-full flex gap-4 mb-4'>

      {/* پہلی image */}
      <div className='w-1/2 h-[200px] relative rounded-3xl overflow-hidden group'>
        <img src={props.image1} className='w-full h-full object-cover' alt="project" />

        {/* یہ والا حصہ hover پر نظر آئے گا */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <h2 className='text-white border-2 border-white rounded-full px-8 py-2 text-lg uppercase'>
            {props.text1}
          </h2>
        </div>
      </div>

      {/* دوسری image */}
      <div className='w-1/2 h-[200px] relative rounded-3xl overflow-hidden group'>
        <img src={props.image2} className='w-full h-full object-cover' alt="project" />

        <div className='absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <h2 className='text-white border-2 border-white rounded-full px-8 py-2 text-lg uppercase'>
            {props.text2}
          </h2>
        </div>
      </div>

    </div>
  )
}

export default ProjectsCard