import React, { useRef, useEffect, useState } from 'react'

const ImageToggleOnScroll = (props) => {
    const { primaryImage, secondaryImage, alt } = props;
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    })

    // add code to check if this is in view when being scrolled
    const [inView, setInView] = useState(false) // initial value is false
    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }


    // scroll hander
    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    }

    return isLoading ? null : (
        <img style={{ width: '600px'}}              
             src={inView ? secondaryImage : primaryImage } 
             alt={alt} 
             ref={imageRef}
        />
    )
}

export default ImageToggleOnScroll
