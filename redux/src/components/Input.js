import React from 'react'
import "../assets/styles/Modal.css"
const Input = ({placeholder,type,id,name,onChange}) => {
  return (

   <input className="input"  placeholder={placeholder} type={type} id={id} name={name} onChange={onChange}/>
  
  )
}

export default Input