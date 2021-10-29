import React from "react";
import classes from "./Places.module.css";
import PlacesItem from "./PlacesItem/PlacesItem";

const Places = (props) => {
	let itemElement = props.item.map((p) => (
		<PlacesItem
			id={p.id}
			key={p.id}
			src={p.link}
			name={p.name}
			item={props.item}
			removeItem={props.removeItem}
		/>
	));
	return (
		<div className="places">
			<div className={classes.places__items}>{itemElement}</div>
		</div>
	);
};

export default Places;
