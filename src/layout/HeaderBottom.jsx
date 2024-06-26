import React from 'react'
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { SlBasket } from "react-icons/sl";
import './style.css'
import '@fontsource/poppins'
import { NavLink } from 'react-router-dom';

const HeaderBottom = () => {
  return (
    <div className='stickyHeader'>
        <nav className='headerBottom'>
        <h1>COLO<span>SHOP</span></h1>

       <div className='headerRight'>
       <ul>
            <li><NavLink style={{textDecoration:"none"}} to={"/"}>HOME</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}} to={"/forms"}>FORM</NavLink></li>
            <li>PROMOTION</li>
            <li>PAGES</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </ul>
        <div className='icons'>
        <IconButton edge="end" aria-label="search">
                      <SearchIcon fontSize='small' />
                    </IconButton>
      <IconButton edge="end" aria-label="person">
              <PersonIcon fontSize='small' />
        </IconButton>
        <IconButton edge="end" aria-label="basket">
              <SlBasket fontSize='small' /> 
        </IconButton>
        </div>
       </div>

       </nav>
    </div>
  )
}

export default HeaderBottom