import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import Header from './layout/Header'
import HeaderBottom from './layout/HeaderBottom'
import Footer from './layout/Footer'
import '@fontsource/poppins'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <Header/>
    <HeaderBottom/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/forms' element={<Form/>} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App