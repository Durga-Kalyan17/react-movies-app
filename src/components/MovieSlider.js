import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ImageSlider({props}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto slide
    autoplaySpeed: 2000,
    // arrows: true 
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="slide" src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-poster-doc-ock.jpg" alt="Image 1" />
      </div>
      <div>
        <img className="slide" src="https://webneel.net/file/images/11-16/8-xmen-movie-poster-design.jpg" alt="Image 2" />
      </div>
      <div>
        <img className="slide" src="https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg" alt="Image 3" />
      </div>
      <div>
        <img className="slide" src="https://wallpapercave.com/wp/wp10387943.jpg" alt="Image 3" />
      </div>
      <div>
        <img className="slide" src="https://www.tallengestore.com/cdn/shop/products/Jurassic_Park_-_Tallenge_Hollywood_Movie_Poster_Collection_093bc087-25e8-4c1a-b426-df466063f3fd.jpg?v=1577693333" alt="Image 3" />
      </div>
      <div>
        <img className="slide" src="https://images.yourstory.com/cs/210/604090802d6d11e9aa979329348d4c3e/av2-1671181754729.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" alt="Image 3" />
      </div>
      <div>
        <img className="slide" src="https://i0.wp.com/globalzonetoday.com/wp-content/uploads/2020/10/Alita-Battle-Angel-Hollywood-Movie.jpg" alt="Image 3" />
      </div>
      <div>
        <img className="slide" src="https://www.tallengestore.com/cdn/shop/products/LordOfTheRings-FellowshipOfTheRing-HollywoodMovieVintagePoster_20b610ed-cceb-4d81-8670-9927d4a7e909.jpg?v=1630764671" alt="Image 3" />
      </div>
      <div>
        <img className="slide" src="https://www.tallengestore.com/cdn/shop/products/TheLittleMermaid-HollywoodEnglishAnimatedMoviePoster_975efd73-f47e-4a5b-8e04-545787d75dd5.jpg?v=1625220808" alt="Image 3" />
      </div>
      <div>
        <img className="slide" src="https://rukminim2.flixcart.com/image/850/1000/poster/f/g/k/the-fault-in-our-stars-poster-for-room-hollywood-movie-posters-original-imaepawfupxrgheu.jpeg?q=20" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
