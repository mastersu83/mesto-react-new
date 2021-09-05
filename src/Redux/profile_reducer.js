const PROFILE_NAME_CHANGE = "PROFILE_NAME_CHANGE";
const PROFILE_POST_CHANGE = "PROFILE_POST_CHANGE";
const PLACES_NAME_CHANGE = "PLACES_NAME_CHANGE";
const PLACES_LINK_CHANGE = "PLACES_LINK_CHANGE";

let initialState = {
  newProfileName: "",
  newProfilePost: "",
  newPlaceName: "",
  newPlaceLink: "",
  name: "Жак-Ив Кусто",
  post: "Исследователь океана",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_NAME_CHANGE:
      return {
        ...state,
        newProfileName: action.newName,
      };
    case PROFILE_POST_CHANGE:
      return {
        ...state,
        newProfilePost: action.newPost,
      };
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
    default:
      return state;
  }
};

export const onProfileNameChange = (newName) => {
  return {
    type: PROFILE_NAME_CHANGE,
    newName: newName,
  };
};
export const onProfilePostChange = (newPost) => {
  return {
    type: PROFILE_POST_CHANGE,
    newPost: newPost,
  };
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

export default profileReducer;
