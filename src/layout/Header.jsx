import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Select } from 'antd';
import React from 'react'
import './style.css'
import '@fontsource/poppins'

const Header = () => {
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

  return (
    <header className='topHeader'>
       <div>
            <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
        </div>
        <div className="optionDiv">
        <Select defaultValue="USD" style={{ width: 70 }} onChange={handleChange}>
      <Option value="CAD">CAD</Option>
      <Option value="AUD">AUD</Option>
      <Option value="EUR">EUR</Option>
      <Option value="AUD">GBP</Option>
    </Select>


    <Select  defaultValue="English" style={{ width: 90 }} onChange={handleChange}>
      <Option className="options" value="French">French</Option>
      <Option className="options" value="Spanish">Spanish</Option>
      <Option className="options" value="Italian">Italian</Option>
      <Option className="options" value="German">German</Option>
    </Select>

    <Select defaultValue="My account" style={{ width: 110 }} onChange={handleChange}>
      <Option value="French"><FaSignInAlt />Sign In</Option>
      <Option value="Spanish"><FaUserPlus />Register</Option>
    </Select>
        </div>
    </header>
  )
}

export default Header