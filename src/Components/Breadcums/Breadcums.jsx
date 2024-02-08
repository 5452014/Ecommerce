import React from 'react'
import "./Breadcum.css"
import arrow_icon from "../Assets/arrow.png";
const Breadcums = (props) => {
    const {product}=props
  return (
    <div className='breadcum'>
    HOME <img src={arrow_icon } alt=''/> SHOP <img src={arrow_icon} alt='' />
    {product.category}<img src={arrow_icon} alt='' />
    {product.name} <img src={arrow_icon} alt='' />
    </div>
  )
}

export default Breadcums