import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

// Styles
const SlideItem = styled.div``;

interface Props {}

const MainImage: React.FC<Props> = () => {
  const slideSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <div className="post-image mt-10">
            <Slider {...slideSetting}>
              <SlideItem>
                <img
                  className="img-fluid"
                  src="/img/main/main.png"
                  alt="main"
                  style={{ height: 'auto', overflow: 'hidden' }}
                />
              </SlideItem>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
