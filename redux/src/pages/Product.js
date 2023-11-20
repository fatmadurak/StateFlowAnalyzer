import React from 'react'
import ProductCard from '../components/ProductCard'
import {  useSelector } from 'react-redux'
import Modal from '../components/Modal';
import "../assets/styles/product.css"
function Product() {

  const {modal}=useSelector(state=>state.modal);
  const {data}=useSelector(state=>state.data)


  return (
   
    <>
    
     <div className='products'>
      {

         data?.map((dat,i)=>(

          <ProductCard key={i} dat={dat}/>

         ))


      }
     </div>

    {

      modal && <Modal title={"ÜRÜN OLUŞTUR"} btnText={"Oluştur"} />
    }
     
    </>
  )
}

export default Product