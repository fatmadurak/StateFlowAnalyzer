import React, { useState } from 'react'
import "../assets/styles/Modal.css"
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux-store/ModalSlice';
import Input from "./Input";
import  Button  from './Button';
import { createDataFunc } from '../redux-store/DataSlice';
function Modal({title,btnText}) {

 const dispatch =useDispatch()
 const [productInfo,setProductInfo]=useState({name:"",price:"",url:""})


const onChangeFunc=(e,type)=>{

if (type=="url") {
    setProductInfo(prev=>({...prev,[e.target.name]:URL.createObjectURL(e.target.files[0])}))
}else{

setProductInfo(prev=>({...prev,[e.target.name]:e.target.value}))

}

    
}

const buttonFunc = () => {
  dispatch(createDataFunc(productInfo));
  dispatch(modalFunc());

}


  return (
    <div className='modal'>

  <div className='modal-wrapper'>
   
   <div>
    {title}
   </div>

   <div className='close' onClick={()=>dispatch(modalFunc())} >
   <IoClose  />
    
   </div>

     <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e=>onChangeFunc(e,"name")}/>
     <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e=>onChangeFunc(e,"price")}/>
     <Input type={"file"}  placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e=>onChangeFunc(e,"url")}/>
    <Button onClick={buttonFunc} btnText={btnText}/>
  </div>




    </div>
  )
}

export default Modal