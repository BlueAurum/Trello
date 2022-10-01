import { createSlice } from "@reduxjs/toolkit";

const toggleVisibleModal = {
    toggleVisible: false
};

export const modalStore = createSlice({
    name: "modalStore",
    initialState: toggleVisibleModal,
    reducers: {
        setToggleVisibleModal(state) {
            state.toggleVisible = !state.toggleVisible
        }
    }
})

export const { setToggleVisibleModal } = modalStore.actions
export default modalStore.reducer