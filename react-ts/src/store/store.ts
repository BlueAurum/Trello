import { configureStore } from "@reduxjs/toolkit";
import modalStore from "./modalStore/modalStore";
import groupStore from "./groupStore/groupStore";

export const store = configureStore({
    reducer: {
        modalStore,
        groupStore
    }
})

export type RooState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch