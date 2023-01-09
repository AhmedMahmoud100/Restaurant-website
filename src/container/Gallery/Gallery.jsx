import React, { useEffect, useState } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const [offset, setOffset] = useState(0)
  const [percent, setPercent] = useState(50)

  useEffect(() => {
    if (window.screen.width < 550) {
      setPercent(100)
    }
  }, [])

  const scroll = (direction) => {
    if (direction === 'right') {
      if (offset < 2) setOffset(pre => pre + 1)
    } else {
      if (offset > 0) setOffset(pre => pre - 1)
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" >
          <div className='test' style={{ transform: `translateX(-${offset * percent}%)` }} >
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`} style={{ width: `${percent}%` }}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
