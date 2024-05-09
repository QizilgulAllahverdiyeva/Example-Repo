import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=> navigate('/forms')} >Add</button>

      <section className='summerCollection' style={{ 
      backgroundImage: `url("https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg.webp")`}}>
        <p>SPRING / SUMMER COLLECTION 2017</p>
        <h1>Get up to 30% Off New Arrivals</h1>
        <button className='shopBtn'>SHOP NOW</button>
      </section>

    </div>
  )
}

export default Home