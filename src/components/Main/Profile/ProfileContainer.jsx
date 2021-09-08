import { connect } from "react-redux";
import Profile from "./Profile";
import {
	onProfileNameChange,
	onProfilePostChange,
	newProfileName,
} from "../../../Redux/profile_reducer";
import {
	onPlacesLinkChange,
	onPlacesNameChange,
	newPlace,
} from "../../../Redux/places_reducer";

let mapStateToProps = (state) => {
	return {
		state: state,
		places: state.places,
	};
};

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		onProfileNameChange: (newName) => {
// 			dispatch(onProfileNameChange(newName));
// 		},
// 		onProfilePostChange: (newName) => {
// 			dispatch(onProfilePostChange(newName));
// 		},
// 		onPlacesNameChange: (newName) => {
// 			dispatch(onPlacesNameChange(newName));
// 		},
// 		onPlacesLinkChange: (newLink) => {
// 			dispatch(onPlacesLinkChange(newLink));
// 		},
// 	};
// };

const ProfileContainer = connect(mapStateToProps, {
	onProfileNameChange,
	onProfilePostChange,
	onPlacesLinkChange,
	onPlacesNameChange,
	newProfileName,
	newPlace,
})(Profile);

export default ProfileContainer;
