import React, { useState } from "react";
import classes from "./Profile.module.css";
import avatar from "../../../img/Avatar.png";
import addBtn from "../../../img/add-btn.svg";
import AddPopup from "../../Popup/AddPopup";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	// debugger;
	const [popupAdd, setPopupAdd] = useState(false);

	let openPopupAdd = () => {
		setPopupAdd(true);
	};
	let closePopupAdd = () => {
		setPopupAdd(false);
	};
	return (
		<section className="profile">
			<div className="container">
				<div className={classes.profile__header}>
					<img className={classes.profile__avatar} src={avatar} alt="avatar" />
					<ProfileInfo
						state={props.state}
						onProfileNameChange={props.onProfileNameChange}
						onProfilePostChange={props.onProfilePostChange}
						newProfileName={props.newProfileName}
						newProfilePost={props.newProfilePost}
					/>
					<div className={classes.profile__add}>
						<button className={classes.popupLink} onClick={openPopupAdd}>
							<img className={classes.profile__addButton} src={addBtn} alt="" />
						</button>
					</div>
				</div>
			</div>
			<AddPopup
				onPlacesLinkChange={props.onPlacesLinkChange}
				onPlacesNameChange={props.onPlacesNameChange}
				newPlace={props.newPlace}
				openPopup={popupAdd}
				closePopup={closePopupAdd}
				places={props.state.places}
			/>
		</section>
	);
};

export default Profile;
