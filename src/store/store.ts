import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoSlice";
import thunk from "redux-thunk"
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useSelector } from "react-redux/es/exports";

export const store = configureStore({
    reducer: {
        todo: todo.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;