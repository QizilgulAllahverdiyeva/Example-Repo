import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

const BestSellers = () => {
    
const { data, setData, filter, setFilterData }=useContext(ProductsContext)
  
    const getAllData = async (category)=>{
      const res = await axios("http://localhost:3000/products")
      setData(res?.data)
      setFilterData(res?.data)
    }
  
    useEffect(()=>{
      getAllData();
    },[])
  
  return (
   <>
    <div>
        <h2 className='arrivalH2'>Best Sellers</h2>
    <div className='redborder'></div>
    </div>
    <div className='datas'>
    {filter.map((elem)=>{
    return (
        <div key={elem.id} className='product'>
  <img className='dataImg' src={elem.image} alt="" />
  <h3 className='datatitle'>{elem.title}</h3>
  <p className='dataPrice'>${elem.price}</p>
  </div>
)}) 
}
 </div> 
   </>
  )
}

export default BestSellers