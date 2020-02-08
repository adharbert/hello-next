import React, { useRef } from 'react'

const ImageToggleOnMouseOver = (props) => {
    const { primaryImage, secondaryImage, alt } = props;
    const imageRef = useRef(null)

    return (
        <img style={{ width: '600px'}} 
             onMouseOver={() => {
                 imageRef.current.src = secondaryImage;
             }} onMouseOut={() => {
                imageRef.current.src = primaryImage;
             }}
             src={primaryImage} 
             alt={alt} 
             ref={imageRef}
        />
    )
}

export default ImageToggleOnMouseOver
