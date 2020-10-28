import React from 'react';
import { Slide } from 'react-slideshow-image';

import data from './db.json';

const FullScreenSlider = () => {
    return (
        <div className="full_screen">
            <Slide easing="ease">
                {data.map(item => (
                    <div className="each-slide" key={item.id}>
                        <div style={{'backgroundImage': `url(/img/${item.img})`}}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default FullScreenSlider;
