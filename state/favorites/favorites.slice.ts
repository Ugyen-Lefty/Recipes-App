import {
	createAction,
	createAsyncThunk,
	createSelector,
	createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "./reducer";

const initialState = {
	favoritesArray: [],
	loading: false,
};

export const fetchFavorites = createAsyncThunk(
	"favorite/fetchFavorites",
	async () => {
		await getAllRecipes();
	}
);

function getAllRecipes() {
	return fetch(
		`https://yum-foods-default-rtdb.asia-southeast1.firebasedatabase.app/Recipes.json?orderBy="name"`
	)
		.then((response) => response.json())
		.then((res) => {
			return res;
			// setFavs(res.filter((favs: any) => favs?.fav));
		})
		.catch((error) => console.error(error));
}

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFavorites.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchFavorites.fulfilled, (state, action) => {
				state.favoritesArray = action.payload;
				state.loading = false;
			})
			.addCase(fetchFavorites.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const selectFavoritesState = (state: RootState) => state.favorite;
export const getAllFavorites = createSelector(
	selectFavoritesState,
	(state: any) => state.favoritesArray
);

export const selectLoadingState = (state: RootState) => state.favorite;
export const getLoadingState = createSelector(
	selectLoadingState,
	(state: any) => state.loading
);

export default favoritesSlice.reducer;
