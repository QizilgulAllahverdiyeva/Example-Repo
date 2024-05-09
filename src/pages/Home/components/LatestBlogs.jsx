import React from 'react'
import './style.css'
import image1 from '../../../assets/images/1.jpg'
import image2 from '../../../assets/images/2.jpg'
import image3 from '../../../assets/images/3.jpg'

const LatestBlogs = () => {
  return (
   <>
   <div>
    <h2 className='arrivalH2'>Latest Blogs</h2>
    <div className='redborder'></div>
    <div className='images'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
    </div>
    </div>
   
   
   </>
  )
}

export default LatestBlogs