import react, { useEffect } from 'react'
import Header from './pages/header/Index'
import Footer from './pages/footer/Footer'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import ServicesPages from './pages/services/Services';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [Blog])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<ServicesPages />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1> 404 Not Found </h1>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
