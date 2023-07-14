import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true 
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="slide" src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-poster-doc-ock.jpg" alt="Image 1" />
      </div>
      <div>
        <img className="slide" src="" alt="Image 2" />
      </div>
      <div>
        <img className="slide" src="https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg" alt="Image 3" />
      </div>
      {/* Add more images here */}
    </Slider>
  );
};

export default ImageSlider;
