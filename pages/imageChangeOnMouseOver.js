import React from 'react'
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const imageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
                primaryImage="/static/images/bw/PA15491092517.jpg" 
                secondaryImage="/static/images/color/PA15491092517.jpg" 
                alt="photo 1" />&nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver 
                primaryImage="/static/images/bw/PA15491092518.jpg" 
                secondaryImage="/static/images/color/PA15491092518.jpg" 
                alt="photo 2" />
        </div>
    )
}

export default imageChangeOnMouseOver
