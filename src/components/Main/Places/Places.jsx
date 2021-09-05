import React from "react";
import classes from "./Places.module.css";
import PlacesItem from "./PlacesItem/PlacesItem";

const Places = (props) => {
  let itemElement = props.state.places.item.map((p) => (
    <PlacesItem key={p.id} src={p.link} name={p.name} />
  ));
  return (
    <div className="places">
      <div className={classes.places__items}>{itemElement}</div>
    </div>
  );
};

export default Places;
