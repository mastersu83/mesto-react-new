const PROFILE_NAME_CHANGE = "PROFILE_NAME_CHANGE";
const PROFILE_POST_CHANGE = "PROFILE_POST_CHANGE";
const NEW_PRFILE_NAME = "NEW_PRFILE_NAME";

let initialState = {
	name: "Жак-Ив Кусто",
	post: "Исследователь океана",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_NAME_CHANGE:
			return {
				...state,
				name: action.newName,
			};
		case PROFILE_POST_CHANGE:
			return {
				...state,
				post: action.newPost,
			};
		case NEW_PRFILE_NAME:
			return {
				...state,
				name: state.name,
				post: state.post,
			};
		default:
			return state;
	}
};

export const newProfileName = () => {
	return {
		type: NEW_PRFILE_NAME,
	};
};

export const onProfileNameChange = (newName) => {
	return {
		type: PROFILE_NAME_CHANGE,
		newName,
	};
};
export const onProfilePostChange = (newPost) => {
	return {
		type: PROFILE_POST_CHANGE,
		newPost,
	};
};

export default profileReducer;
