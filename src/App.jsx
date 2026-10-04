
// import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/Home'
// import Agence from './Pages/Agence'
// import Project from './pages/Project'
// import Stair from './Components/Home/comman/stair'
// import Navbar from './Components/Navigation/Navbar'
// import FullscreenNav from './Components/Navigation/FullscreenNav'
// import NavContext from './Context/NavContext'



// const App = () => {


 
//   return (
    
    
    
//     <div className='text-white'>
//       <Stair/>

//       <Navbar/>
//       <FullscreenNav/>
//       <NavContext/>
      
      
      
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/Agence' element={<Agence/>}/>
//       <Route path='/project' element={<Project/>}/>


//     </Routes>
      
//     </div>
    
//   )
// }

// export default App
// import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/Home'
// import Agence from './Pages/Agence'
// import Project from './Pages/Project'
// import Stair from './Components/Home/comman/stair'
// import Navbar from './Components/Navigation/Navbar'
// import FullscreenNav from './Components/Navigation/FullscreenNav'
// import NavContext from './Context/NavContext'

// const App = () => {
//   return (
//     <NavContext>
//       <div className='text-white'>
//         <Stair />
//         <Navbar />
//         <FullscreenNav />

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/agence' element={<Agence />} />
//           <Route path='/project' element={<Project />} />
//         </Routes>
//       </div>
//     </NavContext>
//   )
// }

// export default App
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projets from './Pages/projects'
import Stair from './Components/Home/comman/Stair'
import Navbar from './Components/Navigation/Navbar'
import FullscreenNav from './Components/Navigation/FullscreenNav'
import NavContext from './Context/NavContext'

const App = () => {
  return (
    <NavContext>
      <div className='text-white'>
        <Stair />
        <Navbar />
        <FullscreenNav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/project' element={<Projets />} />
        </Routes>
      </div>
    </NavContext>
  )
}

export default App