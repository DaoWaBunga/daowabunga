import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgs from '../../data/DikHeads.json';
import { BigText, FlexRow } from '../../styles';
export const Description = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'ease-out',
    infinite: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <>
      <div className="MainBlock">
        <Slider {...settings}>
          {imgs.map((map) => (
            <div key={map.image}>
              <img src={map.image} className="img1" />
            </div>
          ))}
        </Slider>
      </div>
      <FlexRow>
        <BigText>Welcome to The DikHeads Gallery!</BigText>
      </FlexRow>
    </>
  );
};
export default Description;
