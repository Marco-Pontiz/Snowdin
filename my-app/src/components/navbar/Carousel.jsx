import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagenes from '../../img/imagenes.jsx';
import '../../App.css';

function ControlledCarousel() {
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='all-carousel'>
    <Carousel.Item>
        <img className="d-block w-100" src={imagenes.img2} alt="First slide"/>
            <Carousel.Caption>
                <h3 className='clor'>Snowy feelings</h3>

            </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src={imagenes.img3} alt="Second slide"/>
            <Carousel.Caption>
                <h3 className='clor'>Event: Dark Winter</h3>

            </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img className="d-block w-100" src={imagenes.img4} alt="Third slide"/>
        <Carousel.Caption>
        <h3 className='clor'>Be a mountain lover</h3>

        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
);
}

export default ControlledCarousel;