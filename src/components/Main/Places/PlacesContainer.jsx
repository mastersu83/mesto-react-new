import { connect } from "react-redux";
import Places from "./Places";
import { removeItem } from "../../../Redux/places_reducer";

let mapStateToProps = (state) => {
	return {
		item: state.places.item,
	};
};

const PlacesContainer = connect(mapStateToProps, { removeItem })(Places);

export default PlacesContainer;
