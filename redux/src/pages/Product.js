import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal';
function Product() {

  const {modal}=useSelector(state=>state.modal);
  console.log(modal)


  const buttonFunc=()=>{




  }

  return (
   
    <>
    
    <ProductCard/>

    {

      modal && <Modal title={"ÜRÜN OLUŞTUR"} btnText={"Oluştur"} btnFunc={buttonFunc}/>
    }
     
    </>
  )
}

export default Product