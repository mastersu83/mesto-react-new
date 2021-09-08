import profileReducer from "./profile_reducer";
import { combineReducers, createStore } from "redux";
import placesReducer from "./places_reducer";

let reducers = combineReducers({
	profile: profileReducer,
	places: placesReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
