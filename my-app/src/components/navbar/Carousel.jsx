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
                <h3>Snowy feelings</h3>
                <p>What are you waiting for to go camping in the mountains? This winter you will live one of the best experiences with friends.</p>
            </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src={imagenes.img3} alt="Second slide"/>
            <Carousel.Caption>
                <h3>Event: Dark Winter</h3>
                <p>Are you ready to challenge yourself in this event? We look forward to seeing you in Mendoza. Where Aconcagua awaits you</p>
            </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img className="d-block w-100" src={imagenes.img4} alt="Third slide"/>
        <Carousel.Caption>
        <h3>Be a mountain lover</h3>
        <p>Relax and enjoy the beautiful scenery that the mountains have to offer.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
);
}

export default ControlledCarousel;