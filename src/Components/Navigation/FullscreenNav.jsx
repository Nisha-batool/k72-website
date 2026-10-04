
// import { useContext, useRef, useEffect } from "react"
// import { NavbarContext } from "../../Context/NavContext"
// import gsap from "gsap"




// const FullscreenNav = () => {
//    const { navOpen, setNavOpen } = useContext(NavbarContext)
//   const navRef = useRef(null)

//   useEffect(() => {
//     if (navOpen) {
//       gsap.to(navRef.current, {
//         y: 0,
//         duration: 0.6,
//         ease: "power3.inOut"
//       })
//     } else {
//       gsap.to(navRef.current, {
//         y: "-100%",
//         duration: 0.6,
//         ease: "power3.inOut"
//       })
//     }
//   }, [navOpen])
 

//   return (
//     <>
//       <style>{`
//         @keyframes slide {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//       .marquee {
//           display: flex;
//           width: max-content;
//           animation: slide 10s linear infinite;
//         }
//       `}</style>

//       <div className="   w-full h-screen hidden bg-black text-white flex items-center justify-center">
//         <div className="w-full flex justify-between items-center p-5">
//       <h1 className="text-xl">K72</h1>

//       {/* Ye X button hai */}
//       <div onClick={()=> setNavOpen(false)} className="w-10 h-10 flex flex-col justify-center items-center gap-1 cursor-pointer">
//         <div className="w-8 h-0.5 bg-white rotate-45"></div>
//         <div className="w-8 h-0.5 bg-white -rotate-45 -mt-1"></div>
//       </div>
//     </div>

//         <div className="w-full flex flex-col">

//           {/* VIDEO JAISA PATLA BORDER */}
//           <div className="w-full h-[1px] bg-white/20"></div>

//           {/* 1 PROJETS */}
//           <div className=" h-[25vh] group relative w-full py-3 flex items-center justify-center cursor-pointer overflow-hidden">
//             <h1 className="md:text-[8vw] md:text-[4vw] font-black leading-none uppercase tracking-tight">PROJETS</h1>

//             <div className="absolute inset-0 bg-[#D4FF04] flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//               <div className="marquee">
//                 {[1,2].map(n=>(
//                   <div key={n} className="flex items-center shrink-0">
//                     <span className="text-black text-[8vw] md:text-[4vw] font-black uppercase px-6">POUR TOUT VOIR</span>
//                     <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200" className="w-[130px] h-[55px] rounded-full object-cover shrink-0" alt="" />
//                     <span className="text-black text-[8vw] md:text-[4vw] font-black uppercase px-6">POUR TOUT VOIR</span>
//                     <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200" className="w-[130px] h-[55px] rounded-full object-cover shrink-0" alt="" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="w-full h-[1px] bg-white/20"></div>

//           {/* 2 AGENCE - KAALE DABBE KI JAGA IMAGE */}
//           <div className="group relative w-full py-3 flex items-center justify-center cursor-pointer overflow-hidden">
//             <h1 className="md:text-[8vw] md:text-[4vw] font-black leading-none uppercase tracking-tight">AGENCE</h1>

//             <div className="absolute inset-0 bg-[#D4FF04] flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//               <div className="marquee">
//                 {[1,2].map(n=>(
//                   <div key={n} className="flex items-center shrink-0">
//                     <span className="text-black text-[8vw] md:text-[4vw] font-black uppercase px-6">POUR TOUT SAVOIR</span>
//                     {/* YEH IMAGE HAI KAALE DABBE KI JAGA */}
//                     <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" className="w-[70px] h-[55px] rounded-full object-cover shrink-0" alt="" />
//                     <span className="text-black text-[8vw] md:text-[4vw] font-black uppercase px-6">POUR TOUT SAVOIR</span>
//                     <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200" className="w-[130px] h-[55px] rounded-full object-cover shrink-0" alt="" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="w-full h-[1px] bg-white/20"></div>

//           {/* 3 CONTACT */}
//           <div className="group relative w-full py-3 flex items-center justify-center cursor-pointer overflow-hidden">
//             <h1 className="md:text-[8vw] md:text-[4vw] font-black leading-none uppercase tracking-tight">CONTACT</h1>
//             <div className="absolute inset-0 bg-[#D4FF04] flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//               <div className="marquee">
//                 {[1,2].map(n=>(
//                   <div key={n} className="flex items-center shrink-0">
//                     <span className="text-black text-[8vw] md:text-[4vw] font-black uppercase px-6">POUR ENVOYER UN FAX</span>
//                     <span className="text-black text-[8vw] md:text-[4vw] font-black uppercase px-6">POUR ENVOYER UN FAX</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="w-full h-[1px] bg-white/20"></div>

//           {/* 4 BLOGUE */}
//           <div className="group relative w-full py-3 flex items-center justify-center cursor-pointer overflow-hidden">
//             <h1 className="md:text-[8vw] md:text-[4vw] font-black leading-none uppercase tracking-tight">BLOGUE</h1>
//             <div className="absolute inset-0 bg-[#D4FF04] flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//               <div className="marquee">
//                 {[1,2].map(n=>(
//                   <div key={n} className="flex items-center shrink-0">
//                     <span className="text-black text-[8vw] md:text-[4vw] font-black uppercase px-6">LIRE LES ARTICLES</span>
//                     <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200" className="w-[130px] h-[55px] rounded-full object-cover shrink-0" alt="" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="w-full h-[1px] bg-white/20"></div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default FullscreenNav



// 

// import { useContext, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import gsap from 'gsap'
// import { NavbarContext } from '../../Context/NavContext'

// const navItems = [
//   {
//     title: 'PROJETS',
//     to: '/project',
//     hoverText: 'POUR TOUT VOIR',
//     image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200',
//   },
//   {
//     title: 'AGENCE',
//     to: '/agence',
//     hoverText: 'POUR TOUT SAVOIR',
//     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
//   },
//   {
//     title: 'CONTACT',
//     to: '/contact',
//     hoverText: 'POUR NOUS CONTACTER',
//     image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200',
//   },
//   {
//     title: 'BLOGUE',
//     to: '/blog',
//     hoverText: 'LIRE LES ARTICLES',
//     image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200',
//   },
// ]

// const FullscreenNav = () => {
//   const { navOpen, setNavOpen } = useContext(NavbarContext)
//   const navRef = useRef(null)

//   useEffect(() => {
//     if (!navRef.current) return

//     if (navOpen) {
//       gsap.set(navRef.current, { display: 'flex', y: '-100%' })
//       gsap.to(navRef.current, { y: 0, duration: 0.5, ease: 'power3.inOut' })
//     } else {
//       gsap.to(navRef.current, {
//         y: '-100%',
//         duration: 0.5,
//         ease: 'power3.inOut',
//         onComplete: () => gsap.set(navRef.current, { display: 'none' })
//       })
//     }
//   }, [navOpen])

//   return (
//     <>
//       <style>{`
//         @keyframes slide {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }

//         .marquee {
//           display: flex;
//           width: max-content;
//           animation: slide 12s linear infinite;
//         }
//       `}</style>

//       <div
//         ref={navRef}
//         className='fixed inset-0 z-50 hidden bg-black text-white'
//         style={{ transform: 'translateY(-100%)' }}
//       >
//         <div className='absolute top-0 left-0 right-0 flex justify-between items-center p-5'>
//           <h1 className='text-xl'>K72</h1>

//           <div
//             onClick={() => setNavOpen(false)}
//             className='w-10 h-10 flex flex-col justify-center items-center gap-1 cursor-pointer'
//           >
//             <div className='w-8 h-0.5 bg-white rotate-45'></div>
//             <div className='w-8 h-0.5 bg-white -rotate-45 -mt-1'></div>
//           </div>
//         </div>

//         <div className='w-full flex flex-col mt-20'>
//           {navItems.map((item) => (
//             <div key={item.title}>
//               <div className='w-full h-[1px] bg-white/20'></div>

//               <Link
//                 to={item.to}
//                 onClick={() => setNavOpen(false)}
//                 className='group relative w-full py-3 flex items-center justify-center cursor-pointer overflow-hidden'
//               >
//                 <h1 className='md:text-[8vw] text-[4vw] font-black leading-none uppercase tracking-tight'>
//                   {item.title}
//                 </h1>

//                 <div className='absolute inset-0 bg-[#D4FF04] flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
//                   <div className='marquee'>
//                     {[1, 2].map((n) => (
//                       <div key={n} className='flex items-center shrink-0'>
//                         <span className='text-black text-[8vw] md:text-[4vw] font-black uppercase px-6'>
//                           {item.hoverText}
//                         </span>
//                         <img
//                           src={item.image}
//                           className='w-[130px] h-[55px] rounded-full object-cover shrink-0'
//                           alt=''
//                         />
//                         <span className='text-black text-[8vw] md:text-[4vw] font-black uppercase px-6'>
//                           {item.hoverText}
//                         </span>
//                         <img
//                           src={item.image}
//                           className='w-[130px] h-[55px] rounded-full object-cover shrink-0'
//                           alt=''
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default FullscreenNav
import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { NavbarContext } from '../../Context/NavContext'

const navItems = [
  {
    title: 'PROJETS',
    to: '/project',
    hoverText: 'POUR TOUT VOIR',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200',
  },
  {
    title: 'AGENCE',
    to: '/agence',
    hoverText: 'POUR TOUT SAVOIR',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
  },
  {
    title: 'CONTACT',
    to: '/contact',
    hoverText: 'POUR NOUS CONTACTER',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200',
  },
  {
    title: 'BLOGUE',
    to: '/blog',
    hoverText: 'LIRE LES ARTICLES',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200',
  },
]

const FullscreenNav = () => {
  const { navOpen, setNavOpen } = useContext(NavbarContext)
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current) return

    if (navOpen) {
      gsap.set(navRef.current, { display: 'flex', y: '-100%' })
      gsap.to(navRef.current, { y: 0, duration: 0.5, ease: 'power3.inOut' })
    } else {
      gsap.to(navRef.current, {
        y: '-100%',
        duration: 0.5,
        ease: 'power3.inOut',
        onComplete: () => gsap.set(navRef.current, { display: 'none' })
      })
    }
  }, [navOpen])

  return (
    <>
      <style>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: slide 12s linear infinite;
        }
      `}</style>

      <div
        ref={navRef}
        className='fixed inset-0 z-50 hidden bg-black text-white'
        style={{ transform: 'translateY(-100%)' }}
      >
        <div className='absolute top-0 left-0 right-0 flex justify-between items-center p-5'>
          <h1 className='text-xl'>K72</h1>

          <div
            onClick={() => setNavOpen(false)}
            className='w-10 h-10 flex flex-col justify-center items-center gap-1 cursor-pointer'
          >
            <div className='w-8 h-0.5 bg-white rotate-45'></div>
            <div className='w-8 h-0.5 bg-white -rotate-45 -mt-1'></div>
          </div>
        </div>

        <div className='w-full mt-20'>
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              onClick={() => setNavOpen(false)}
              className='group relative block w-full border-t border-white/20 overflow-hidden'
            >
              <div className='relative flex h-[18vh] md:h-[20vh] items-center justify-center'>
                <h1 className='relative z-10 md:text-[8vw] text-[4vw] font-black leading-none uppercase tracking-tight'>
                  {item.title}
                </h1>

                <div className='absolute inset-0 bg-[#D4FF04] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                  <div className='marquee h-full items-center'>
                    {[1, 2].map((n) => (
                      <div key={n} className='flex items-center shrink-0'>
                        <span className='text-black text-[8vw] md:text-[4vw] font-black uppercase px-6'>
                          {item.hoverText}
                        </span>
                        <img
                          src={item.image}
                          className='w-[130px] h-[55px] rounded-full object-cover shrink-0'
                          alt=''
                        />
                        <span className='text-black text-[8vw] md:text-[4vw] font-black uppercase px-6'>
                          {item.hoverText}
                        </span>
                        <img
                          src={item.image}
                          className='w-[130px] h-[55px] rounded-full object-cover shrink-0'
                          alt=''
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default FullscreenNav