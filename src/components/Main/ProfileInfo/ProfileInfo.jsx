import React from "react";
import mod from './ProfileInfo.module.css'

const ProfileInfo = () => {
    let UrlImage = 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg';

    return (
        <div>
            <div className={ mod.main__imgBlok}>
                <img className={ mod.main__image } src={ UrlImage } alt='' />
            </div>
            <div className={ mod.descriptionBlok }>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;