import { connect } from "react-redux";
import Places from "./Places";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const PlacesContainer = connect(mapStateToProps)(Places);

export default PlacesContainer;
