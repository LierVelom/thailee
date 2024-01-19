import React from "react";

const PersonalGallery = ({ dataImages }) => {
	return (
		<div className="personal-gallery">
			{dataImages.map((image, index) => {
				return (
					<div
						key={index}
						className="gallery-image"
						style={{ backgroundImage: `url(${image.url})`, '--i': index }}
					></div>
				)
			})}
		</div>
	)
}

export default PersonalGallery;