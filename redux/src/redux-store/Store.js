import { configureStore } from '@reduxjs/toolkit';
import  dataSlice from './DataSlice';
import  modalSlice from './ModalSlice';

export default configureStore({
  reducer: {
    data: dataSlice, 
    modal: modalSlice, 
  },
});
