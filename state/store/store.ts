import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../favorites/reducer";
import { useDispatch } from "react-redux";

const store = configureStore({
	reducer: {
		data: dataReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
