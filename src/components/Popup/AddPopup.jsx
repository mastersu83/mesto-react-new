import React from "react";
import closeIcon from "../../img/close-icon.svg";
import classes from "./Popup.module.css";

const AddPopup = (props) => {
  let onPlacesNameChange = (e) => {
    let newName = e.target.value;
    props.onPlacesNameChange(newName);
  };
  let onPlacesLinkChange = (e) => {
    let newLink = e.target.value;
    props.onPlacesLinkChange(newLink);
  };

  return (
    <div
      className={`${classes.popup} ${props.openPopup ? `${classes.open}` : ""}`}
    >
      <div className={classes.popup__body}>
        <div className={classes.popup__content}>
          <img
            className={classes.popup__closeImg}
            src={closeIcon}
            alt=""
            onClick={props.closePopup}
          />
          <div className="popup__inner">
            <form id="formAdd" className="popup__formAdd">
              <div className={classes.popup__title}>Новое место</div>
              <input
                id="input-name"
                className={classes.popup__input}
                form="formAdd"
                type="text"
                placeholder="Название"
                required
                onChange={onPlacesNameChange}
                value={props.profile.newPlaceName}
              />
              <input
                id="input-post"
                className={classes.popup__input}
                form="formAdd"
                type="text"
                placeholder="Ссылка на картинку"
                required
                onChange={onPlacesLinkChange}
                value={props.profile.newPlaceLink}
              />
              <button
                id="save"
                className={classes.popup__submit}
                form="formAdd"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.overlay} onClick={props.closePopup} />
    </div>
  );
};

export default AddPopup;
