import React from "react";
import classes from "./Popup.module.css";
import closeIcon from "../../img/close-icon.svg";

const ImgPopup = (props) => {
  return (
    <div
      className={`${classes.popup} ${props.openPopup ? `${classes.open}` : ""}`}
    >
      <div className={classes.popup__body}>
        <div className={classes.popupImg__container}>
          <img src={props.src} alt="" className={classes.popupImg__image} />
          <h2 className={classes.popupImg__name}>{props.name}</h2>
          <img
            src={closeIcon}
            alt=""
            className={classes.popup__closeImg}
            onClick={props.closePopup}
          />
        </div>
      </div>
      <div className={classes.overlay} onClick={props.closePopup} />
    </div>
  );
};

export default ImgPopup;
