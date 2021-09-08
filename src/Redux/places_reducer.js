const PLACES_NAME_CHANGE = "PLACES_NAME_CHANGE";
const PLACES_LINK_CHANGE = "PLACES_LINK_CHANGE";
const NEW_PLACE = "NEW_PLACE";
const REMOVE_ITEM = "REMOVE_ITEM";

let initialState = {
	item: [
		{
			id: 0,
			name: "Архыз",
			link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
		},
		{
			id: 1,
			name: "Челябинская область",
			link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
		},
		{
			id: 2,
			name: "Иваново",
			link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
		},
		{
			id: 3,
			name: "Камчатка",
			link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
		},
		{
			id: 4,
			name: "Холмогорский район",
			link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
		},
		{
			id: 5,
			name: "Байкал",
			link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
		},
	],
	newPlaceName: "",
	newPlaceLink: "",
};

const placesReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLACES_NAME_CHANGE:
			return {
				...state,
				newPlaceName: action.newName,
			};
		case PLACES_LINK_CHANGE:
			return {
				...state,
				newPlaceLink: action.newLink,
			};
		case NEW_PLACE:
			let newPlace = {
				id: state.item.length,
				name: state.newPlaceName,
				link: state.newPlaceLink,
			};
			return {
				...state,
				item: [newPlace, ...state.item],
				newPlaceName: "",
				newPlaceLink: "",
			};
		case REMOVE_ITEM:
			return {
				...state,
				item: state.item.splice(action.index, 1),
				...state,
			};
		default:
			return state;
	}
};

export const onPlacesNameChange = (newName) => {
	return {
		type: PLACES_NAME_CHANGE,
		newName: newName,
	};
};
export const onPlacesLinkChange = (newLink) => {
	return {
		type: PLACES_LINK_CHANGE,
		newLink: newLink,
	};
};
export const newPlace = () => {
	return {
		type: NEW_PLACE,
	};
};
export const removeItem = (index) => {
	return {
		type: REMOVE_ITEM,
		index,
	};
};

export default placesReducer;
