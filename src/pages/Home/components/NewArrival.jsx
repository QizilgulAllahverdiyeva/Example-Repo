import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import axios from 'axios'
import { ProductsContext } from '../../../context/ProductsContext'

const NewArrival = () => {

const { data, setData, filter, setFilterData, active, setActive }= useContext(ProductsContext)

  const getAllData = async (category)=>{
    const res = await axios("http://localhost:3000/products")
    setData(res?.data)
    setFilterData(res?.data)
    setActive(category)
  }

  
  useEffect(()=>{
    getAllData();
  },[])
  
  const deleteData = async (id)=>{
    await axios.delete(`http://localhost:3000/products/${id}`)
    getAllData();
  }
  const mensData = (category)=>{
    let filterData = data.filter((product)=> product.category=="men's clothing")
   setFilterData(filterData)
   setActive(category)
   console.log(filterData);
  }

  const womensData = (category)=>{
   let filterData = data.filter((product)=> product.category=="women's clothing")
   setFilterData(filterData)
   setActive(category)
   console.log(filterData);
  }

  const jewelluaryData = (category)=>{
    let filterData = data.filter((product)=> product.category=="jewelery")
    setFilterData(filterData)
    setActive(category)
    console.log(filterData);
   }





  return (
    <>
    <h2 className='arrivalH2'>New Arrivals</h2>
    <div className='redborder'></div>
    <ul>
        <li onClick={()=>getAllData('all')} className={ active=='all' ? "active": ''}>ALL</li>
        <li onClick={()=>womensData('women')} className={ active=='women' ? "active": ''}>WOMEN'S</li>
        <li onClick={()=>mensData('men')} className={ active=='men' ? "active": ''}>MEN'S</li>
        <li onClick={()=>jewelluaryData('jewellery')} className={active =='jewellery' ? "active": ''}>JEWELLUARY</li>
    </ul>
    
      <div className='datas'>
        {filter.map((elem)=>{
        return (
            <div key={elem.id} className='product'>
      <img className='dataImg' src={elem.image} alt="" />
      <h3 className='datatitle'>{elem.title}</h3>
      <p className='dataPrice'>${elem.price}</p>
      <div>
      <button onClick={()=>deleteData(elem.id)} className='deleteBtn'>DELETE</button>
      </div>



      </div>
        )
    
     }) 
    
    }
     </div>
    
    
    </>
  )
}

export default NewArrival