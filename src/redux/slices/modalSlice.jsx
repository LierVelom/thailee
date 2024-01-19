import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isOpen: false,
		content: {
			title: 'Default',
			body: 'JSON'
		}
	},
	reducers: {
		toggleModal: (state, action) => {
			if (action.payload)
				state.isOpen = action.payload;
			else
				state.isOpen = !state.isOpen;
		},
		updateModal: (state, action) => {
			state.content = action.payload;
		},
	},
});

export const { toggleModal, updateModal } = modalSlice.actions;
export const selectModal = (state) => state.modal;
export default modalSlice.reducer;