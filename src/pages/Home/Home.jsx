import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import '@fontsource/poppins/600.css';
import NewArrival from './components/NewArrival';
import BestSellers from './components/BestSellers';
import LatestBlogs from './components/LatestBlogs';
import NewsLetter from './components/NewsLetter';
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <section className='summerCollection' style={{ 
      backgroundImage: `url("https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg.webp")`}}>
        <p>SPRING / SUMMER COLLECTION 2017</p>
        <h1 className='getUp'>Get up to 30% Off New Arrivals</h1>
        <button className='shopBtn'>SHOP NOW</button>
      </section>
      <section className='collections'>
        <div style={{fontFamily: 'Poppins'}} className='women'>
           <p className='collection' href="">WOMEN`S</p>
        </div>
        <div  className='accessory'>
            <p className='collection' href="">ACCESSORIES`S</p>
        </div>
        <div  className='men'>
            <p className='collection' href="">MEN`S</p>
        </div>
      </section>
      <section>
        <NewArrival/>
      </section>
      <section className='bestSeller'>
        <BestSellers/>
      </section>
      <section className='latestBlogs'>
        <LatestBlogs/>
      </section>
      <section className='newsLetter'>
        <NewsLetter/>
      </section>
    </div>
  )
}

export default Home