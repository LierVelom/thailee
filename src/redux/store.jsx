import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slices/modalSlice'
import loaderSlice from './slices/loaderSlice'
const store = configureStore({
	reducer: {
		modal: modalSlice,
		loader: loaderSlice
	}
})

export default store