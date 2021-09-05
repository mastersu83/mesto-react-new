import React, { useState } from "react";
import classes from "../Profile.module.css";
import editBtn from "../../../../img/edit-btn.svg";
import EditPopup from "../../../Popup/EditPopup";

const ProfileInfo = (props) => {
  const [popupEdit, setPopupEdit] = useState(false);

  let openPopupEdit = () => {
    setPopupEdit(true);
  };
  let closePopupEdit = () => {
    setPopupEdit(false);
  };
  return (
    <div className={classes.profile__info}>
      <div className={classes.profile__data}>
        <h2 className={classes.profile__name}>{props.state.profile.name}</h2>
        <span className={classes.profile__post}>
          {props.state.profile.post}
        </span>
      </div>
      <div className={classes.profile__editLink}>
        <button className={classes.popupLink} onClick={openPopupEdit}>
          <img className={classes.profile__editButton} src={editBtn} alt="" />
        </button>
      </div>
      <EditPopup
        onProfileNameChange={props.onProfileNameChange}
        onProfilePostChange={props.onProfilePostChange}
        openPopup={popupEdit}
        closePopup={closePopupEdit}
        profile={props.state.profile}
      />
    </div>
  );
};

export default ProfileInfo;
