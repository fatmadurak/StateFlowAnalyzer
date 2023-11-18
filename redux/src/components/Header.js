import React from 'react'
import "../assets/styles/Header.css"
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux-store/ModalSlice'
const Header = () => {

  const dispatch=useDispatch();


  return (
   <>
   <div className='header-container'>
    
    <div className='logo'>
        UYGULAMA

    
     </div>

    <div className='header-wrapper'>
        <select name='' id=''>
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
        </select>
   

   
        <input  placeholder='Arama Yapınız:'/>
      
     <button onClick={()=>dispatch(modalFunc())} type="">Modal Ekle</button>
   
     </div>

   

   </div>
   
   
   
   </>
  )
}

export default Header