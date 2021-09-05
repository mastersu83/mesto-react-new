import { connect } from "react-redux";
import Profile from "./Profile";
import {
  onProfileNameChange,
  onProfilePostChange,
} from "../../../Redux/profile_reducer";
import {
  onPlacesLinkChange,
  onPlacesNameChange,
} from "../../../Redux/places_reducer";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onProfileNameChange: (newName) => {
      dispatch(onProfileNameChange(newName));
    },
    onProfilePostChange: (newName) => {
      dispatch(onProfilePostChange(newName));
    },
    onPlacesNameChange: (newName) => {
      dispatch(onPlacesNameChange(newName));
    },
    onPlacesLinkChange: (newLink) => {
      dispatch(onPlacesLinkChange(newLink));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
