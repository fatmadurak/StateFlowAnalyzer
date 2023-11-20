import React from 'react'
import "../assets/styles/product.css"
const ProductCard = ({dat}) => {
  return (
    <div className="img" >


      <img  src={dat?.url} alt=""/>
      <div className='info'>
      <div className='name'>
      Name:{dat?.name}
      </div>
       <div className='price'>
      Price: {dat?.price}
       </div>
      </div>
   
    </div>
  )
}

export default ProductCard