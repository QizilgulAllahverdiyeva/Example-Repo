import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import Header from './layout/Header'
import HeaderBottom from './layout/HeaderBottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeaderBottom/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/forms' element={<Form/>} />
     </Routes>
    </>
  )
}

export default App