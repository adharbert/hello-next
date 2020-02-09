import React from 'react'
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const imageChangeOnScroll = () => {
    return (
        <div>
            {['PA15491092509', 'PA15491092510', 'PA15491092511', 'PA15491092512', 'PA15491092513', 'PA15491092514', 'PA15491092517', 'PA15491092518', 'PA15491092519', 'PA15491092520', 'PA15491092521'].map(speakId => {
                return (
                    <div key={speakId}>
                        <ImageToggleOnScroll primaryImage={`/static/images/bw/${speakId}.jpg`}
                                             secondaryImage={`/static/images/color/${speakId}.jpg`}
                                             alt={`image-${speakId}`}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default imageChangeOnScroll
