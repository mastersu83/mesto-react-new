import React, { useState } from "react";
import classes from "./PlacesItem.module.css";
import ImgPopup from "../../../Popup/ImgPopup";

const PlacesItem = (props) => {
  const [popupImg, setPopup] = useState(false);

  let openPopupImg = () => {
    setPopup(true);
  };
  let closePopupImg = () => {
    setPopup(false);
  };

  const [like, setLike] = useState();

  const onLike = () => {
    setLike(true);
  };
  const onLikeDarken = () => {
    setLike(false);
  };

  return (
    <div className={classes.places__item}>
      <img
        src={props.src}
        alt=""
        className={classes.places__itemImg}
        onClick={openPopupImg}
      />
      <div className={classes.places__data}>
        <h2 className={classes.places__itemTitle}>{props.name}</h2>
        <button
          type="button"
          className={`${classes.places__itemLike} ${
            like ? `${classes.hidden}` : " "
          }`}
          onClick={onLike}
        />
        <button
          onClick={onLikeDarken}
          type="button"
          className={`${classes.places__itemLikeDarken} 
          ${like ? " " : `${classes.hidden}`}`}
        />
      </div>
      <button type="button" className={classes.places__removeButton} />
      <ImgPopup
        src={props.src}
        name={props.name}
        openPopup={popupImg}
        closePopup={closePopupImg}
      />
    </div>
  );
};

export default PlacesItem;
