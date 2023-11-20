import React from 'react'
import "../assets/styles/Modal.css"
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux-store/ModalSlice';
import Input from "./Input";
function Modal({title,content,btnText,btnFunc}) {

 const dispatch =useDispatch()

const onChangeFunc=()=>{

    
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

     <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={onChangeFunc}/>
     <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={onChangeFunc}/>
     <Input type={"file"}  placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={onChangeFunc}/>

  </div>




    </div>
  )
}

export default Modal