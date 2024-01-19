import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
	name: 'loader',
	initialState: {
		isLoading: true
	},
	reducers: {
		setLoader: (state, action) => {
			state.isLoading = action.payload;
		}
	},
});

export const { setLoader } = loaderSlice.actions;
export const selectLoader = (state) => state.loader.isLoading;
export default loaderSlice.reducer;