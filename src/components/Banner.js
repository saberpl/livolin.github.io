import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideBanner from '../img/banner.jpg';
import IconLivolin from '../img/livolin.png';

const Banner = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='banner-body'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <img className='d-block w-100' src={SlideBanner} alt='First slide' />
          <Carousel.Caption>
            <div className='banner-container'>
              <h1>Chương trình tư vấn sức khoẻ các bệnh lý về gan</h1>
              <div className='banner-section'>
                <div className='detail'>
                  <i className='fa fa-calendar-o' aria-hidden='true'></i>
                  <p>June 27- July 8,2018</p>
                  <div className='line'></div>
                  <i className='fa fa-comments-o' aria-hidden='true'></i>
                  <p>PGS.TS Nguyễn Xuân Thành</p>
                </div>
                <button>Tìm hiểu thêm</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={SlideBanner} alt='Second slide' />
          <Carousel.Caption>
            <div className='banner-container'>
              <h1>Chương trình tư vấn sức khoẻ các bệnh lý về gan</h1>
              <div className='banner-section'>
                <div className='detail'>
                  <i className='fa fa-calendar-o' aria-hidden='true'></i>
                  <p>June 27- July 8,2018</p>
                  <div className='line'></div>
                  <i className='fa fa-comments-o' aria-hidden='true'></i>
                  <p>PGS.TS Nguyễn Xuân Thành</p>
                </div>
                <button>Tìm hiểu thêm</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={SlideBanner} alt='Third slide' />
          <Carousel.Caption>
            <div className='banner-container'>
              <h1>Chương trình tư vấn sức khoẻ các bệnh lý về gan</h1>
              <div className='banner-section'>
                <div className='detail'>
                  <i className='fa fa-calendar-o' aria-hidden='true'></i>
                  <p>June 27- July 8,2018</p>
                  <div className='line'></div>
                  <i className='fa fa-comments-o' aria-hidden='true'></i>
                  <p>PGS.TS Nguyễn Xuân Thành</p>
                </div>
                <button>Tìm hiểu thêm</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={SlideBanner} alt='Fourth slide' />
          <Carousel.Caption>
            <div className='banner-container'>
              <h1>Chương trình tư vấn sức khoẻ các bệnh lý về gan</h1>
              <div className='banner-section'>
                <div className='detail'>
                  <i className='fa fa-calendar-o' aria-hidden='true'></i>
                  <p>June 27- July 8,2018</p>
                  <div className='line'></div>
                  <i className='fa fa-comments-o' aria-hidden='true'></i>
                  <p>PGS.TS Nguyễn Xuân Thành</p>
                </div>
                <button>Tìm hiểu thêm</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={SlideBanner} alt='Fifth slide' />
          <Carousel.Caption>
            <div className='banner-container'>
              <h1>Chương trình tư vấn sức khoẻ các bệnh lý về gan</h1>
              <div className='banner-section'>
                <div className='detail'>
                  <i className='fa fa-calendar-o' aria-hidden='true'></i>
                  <p>June 27- July 8,2018</p>
                  <div className='line'></div>
                  <i className='fa fa-comments-o' aria-hidden='true'></i>
                  <p>PGS.TS Nguyễn Xuân Thành</p>
                </div>
                <button>Tìm hiểu thêm</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <img src={IconLivolin} className='icon-livolin' alt='' />
    </div>
  );
};

export default Banner;
