import React from "react";
import closeIcon from "../../img/close-icon.svg";
import classes from "./Popup.module.css";

const EditPopup = (props) => {
  console.log(props.profile.newProfileName);
  let onProfileNameChange = (e) => {
    let newName = e.target.value;
    props.onProfileNameChange(newName);
  };
  let onProfilePostChange = (e) => {
    let newPost = e.target.value;
    props.onProfilePostChange(newPost);
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
            <form className="popup__formEdit">
              <div className={classes.popup__title}>Редактировать профиль</div>
              <input
                id="input-name"
                className={classes.popup__input}
                placeholder="Введите имя"
                required
                onChange={onProfileNameChange}
                value={props.profile.newProfileName}
              />
              <input
                id="input-post"
                className={classes.popup__input}
                placeholder="Расскажите о себе"
                required
                onChange={onProfilePostChange}
                value={props.profile.newProfilePost}
              />
              <button id="save" className={classes.popup__submit}>
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

export default EditPopup;
