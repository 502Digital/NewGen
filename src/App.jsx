import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import NotFound from './pages/notFound/NotFound'
// import Gallery from './pages/gallery/Gallery'
import Casestudies from './pages/casestudies/Casestudies'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='services' element={<Services/>}/>
        {/* <Route path='gallery' element={<Gallery/>}/> */}
        <Route path='casestudies' element={<Casestudies/>}/>
        <Route path='*' element={<NotFound/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App