
// import React from 'react'
// import ProjectsCard from '../Components/Home/project/projectsCard'



// const Projects = () => {

//   const projects= [{
//     image1:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920.jpg?w=1200&h=1920&s=b18d369df1e2ac454455ceb3ebb67edc',
//     image2: 'https://k72.ca/images/caseStudies/OKA/OKA_Fromage_08_2692_srgb.jpg?w=1200&h=1920&s=4bf2c3ead1ed1552f0f3bfb12ada4544'
//   },{

    
//     image1:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-featured_img.jpg?w=1200&h=1920&s=902d926316975082f94a90e8cc3804eb',
//    image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---FeaturedImage.jpg?w=1200&h=1920&s=c644f6373f81f0da579c3b214d08f1f4',
//   },{

//     image1:'https://k72.ca/images/caseStudies/Opto/featuredimage_opto.jpg?w=1200&h=1920&s=034384f814f82a7d70e95cc4ab3c565c',
//     image2:'https://k72.ca/images/caseStudies/OKA/OKA_Fromage_08_2692_srgb.jpg?w=1200&h=1920&s=4bf2c3ead1ed1552f0f3bfb12ada4544',
//   }]
   
  
//   return (
//     <div className='p-4'>
//       <div className='pt-[30vh]'>
//         <h2 className='font-[font2] text-[9vw] uppercase text-black leading-[0.85]'>
//           PROJETS
//         </h2>
//       </div>

//       {projects.map(function(elem,idx){
//         return <div key={idx}className='w-full h-[200px] mb-4 flex gap-4  '>
//         <ProjectsCard image1={elem.image1} image2={elem.image2}/>
//         </div>

//       })}
      
//     </div>
//   )
// }

// export default Projects

import React from 'react'
import ProjectsCard from '../Components/Home/project/projectsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const projects = [
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920.jpg?w=1200&h=1920&s=b18d369df1e2ac454455ceb3ebb67edc',
      image2: 'https://k72.ca/images/caseStudies/OKA/OKA_Fromage_08_2692_srgb.jpg?w=1200&h=1920&s=4bf2c3ead1ed1552f0f3bfb12ada4544',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-featured_img.jpg?w=1200&h=1920&s=902d926316975082f94a90e8cc3804eb',
      image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---FeaturedImage.jpg?w=1200&h=1920&s=c644f6373f81f0da579c3b214d08f1f4',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/Opto/featuredimage_opto.jpg?w=1200&h=1920&s=034384f814f82a7d70e95cc4ab3c565c',
      image2: 'https://k72.ca/images/caseStudies/OKA/OKA_Fromage_08_2692_srgb.jpg?w=1200&h=1920&s=4bf2c3ead1ed1552f0f3bfb12ada4544',
    },
  ]

  gsap.registerPlugin(ScrollTrigger)
useGSAP(function(){
  gsap.from('.hero',{
    height:'100px',
    
      
    
    scrollTrigger:{
      trigger:'.hero',
      
      start:'top 100%',
      end:'top -150%',
      scrub:true,

    }
  })
})


  return (
    <div className='p-4'>
      <div className='pt-[30vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase text-black leading-[0.85]'>
          PROJETS
        </h2>
      </div>

      {projects.map((elem, idx) => (
         <div key={idx} className='hero'>
        <ProjectsCard  image1={elem.image1} image2={elem.image2} text1="voir le project" text2="voir le project" />
        </div>
      ))}
    </div>
  )
}

export default Projects