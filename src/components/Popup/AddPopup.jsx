import React from "react";
import closeIcon from "../../img/close-icon.svg";
import classes from "./Popup.module.css";

const AddPopup = (props) => {
	// debugger;
	let newPlacesNameChange = (e) => {
		let newName = e.target.value;
		props.onPlacesNameChange(newName);
	};
	let newPlacesLinkChange = (e) => {
		let newLink = e.target.value;
		props.onPlacesLinkChange(newLink);
	};

	const addNewPlace = () => {
		if (
			props.places.newPlaceName.length &&
			props.places.newPlaceLink.length !== 0
		) {
			props.newPlace();
			props.closePopup();
		} else {
			return;
			// alert("заполните поле");
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
						<div id="formAdd" className="popup__formAdd">
							<div className={classes.popup__title}>Новое место</div>
							<input
								id="input-name"
								className={classes.popup__input}
								form="formAdd"
								type="text"
								placeholder="Название"
								required
								onChange={newPlacesNameChange}
								value={props.places.newPlacesName}
							/>
							<input
								id="input-post"
								className={classes.popup__input}
								form="formAdd"
								type="text"
								placeholder="Ссылка на картинку"
								required
								onChange={newPlacesLinkChange}
								value={props.places.newPlacesLink}
							/>
							<button
								id="save"
								className={classes.popup__submit}
								form="formAdd"
								type="submit"
								onClick={addNewPlace}
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

export default AddPopup;
