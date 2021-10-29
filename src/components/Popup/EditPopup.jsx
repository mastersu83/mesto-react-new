import React from "react";
import closeIcon from "../../img/close-icon.svg";
import classes from "./Popup.module.css";

const EditPopup = (props) => {
	let newProfileNameChange = (e) => {
		let newName = e.target.value;
		props.onProfileNameChange(newName);
	};
	let newProfilePostChange = (e) => {
		let newPost = e.target.value;
		props.onProfilePostChange(newPost);
	};

	const newProfileName = () => {
		if (props.profile.name.length && props.profile.post.length !== 0) {
			props.newProfileName();
			props.closePopup();
		} else {
			alert("заполните оба поля");
		}
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
						<div className="popup__formEdit">
							<div className={classes.popup__title}>Редактировать профиль</div>
							<input
								className={classes.popup__input}
								placeholder="Введите имя"
								required
								onChange={newProfileNameChange}
								value={props.profile.name}
							/>
							<input
								className={classes.popup__input}
								placeholder="Расскажите о себе"
								required
								onChange={newProfilePostChange}
								value={props.profile.post}
							/>
							<button
								onClick={newProfileName}
								className={classes.popup__submit}
							>
								Сохранить
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.overlay} onClick={props.closePopup} />
		</div>
	);
};

export default EditPopup;
