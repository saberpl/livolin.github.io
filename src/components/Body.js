import React from 'react';
import Askphoto from '../img/ask.png';
import Commentphoto from '../img/comment.jpg';
import Newsonce from '../img/news1.png';
import Newssecond from '../img/news2.png';
import Newsthird from '../img/news3.png';
import Handbookonce from '../img/handbook1.png';
import Handbooksecond from '../img/handbook2.png';
import Handbookthird from '../img/handbook3.jpg';
import Handbookfourth from '../img/handbook4.png';

const Body = (props) => {
  return (
    <div className='body-section'>
      <div className='section-container'>
        <div className='section-ask-comment'>
          <div className='content-ask-comment'>
            <h1>HỎI CHUYÊN GIA</h1>
            <img src={Askphoto} alt='' />
            <h2>
              Xét nghiệm chẩn đoán viêm gan C là hoạt động được khuyến khích và
              vô cùng cần thiết.
            </h2>
            <p>
              Một lượng nhỏ chất béo và dầu có vai trò rất quan trọng trong việc
              dự trữ năng lượng, bảo vệ các mô của cơ thể và vận chuyển vitamin.
              Tuy nhiên, quá nhiều chất béo lại gây ra tình trạng tích tụ mỡ
              trong gan,
            </p>
          </div>
          <div className='content-ask-comment'>
            <h1>NHẬN XÉT KHÁCH HÀNG</h1>
            <img src={Commentphoto} alt='' />
            <h2>Viêm gan C kiêng ăn gì? Thực phẩm và thuốc nên tránh</h2>
            <p>
              Một chế độ ăn uống không khoa học, kém hợp lý có thể khiến bệnh
              nhân viêm gan C chậm hồi phục và tăng nguy cơ tổn thương gan nặng
              hơn. Do đó, người bệnh cần đặc biệt lưu ý khi lựa chọn thực phẩm
              tiêu thụ hàng ngày.
            </p>
          </div>
          <div className='line'></div>
        </div>
        <div className='section-news'>
          <h1>TIN TỨC</h1>
          <div className='content-news'>
            <img src={Newsonce} alt='' />
            <p>
              Viêm gan C thường không có biểu hiện rõ ràng vào các giai đoạn đầu
              của bệnh. D..
            </p>
          </div>
          <div className='content-news'>
            <img src={Newssecond} alt='' />
            <p>
              Xét nghiệm chẩn đoán viêm gan C là hoạt động được khuyến khích và
              vô cùng cần thiết.
            </p>
          </div>
          <div className='content-news'>
            <img src={Newsthird} alt='' />
            <p>
              Viêm gan C là căn bệnh có thể lây lan qua đường máu, đường tình
              dục và mẹ truyền sang con.
            </p>
          </div>
          <div className='content-see-more'>
            <p>Xem thêm</p>
            <i className='fa fa-play' aria-hidden='true'></i>
          </div>
        </div>
      </div>
      <div className='section-container-detail'>
        <div className='content-container-detail'>
          <h1>CẨM NANG GAN KHỎE</h1>
          <div className='content-detail'>
            <div className='detail'>
              <img src={Handbookonce} alt='' />
              <h2>Symbolic Mathematics Finally Yields to Neural Networks</h2>
              <p>
                Researchers found picky eating to be a stable trait throughout
                ages 4 to 9. They reported that the eating habit appears to be
                associated
              </p>
            </div>
            <div className='detail'>
              <img src={Handbooksecond} alt='' />
              <h2>Egg Laying or Live Birth: How Evolution Chooses</h2>
              <p>
                Discoveries that transcend boundaries are among the greatest
                delights of scientific research, but such leaps are often
                overlooked because they
              </p>
            </div>
            <div className='detail'>
              <img src={Handbookthird} alt='' />
              <h2>Inside Deep Undersea Rocks, Life Thrives Without the Sun</h2>
              <p>
                I understood: Scientists must specialize to succeed. Biologists
                studying microglia don’t tend to read papers about brain waves,
                and brain
              </p>
            </div>
            <div className='detail'>
              <img src={Handbookfourth} alt='' />
              <h2>Spreading the Word on a Possible Alzheimer’s Treatment</h2>
              <p>
                Today, brain waves are a vital part of neuroscience research and
                medical diagnosis, though doctors have never manipulated them
              </p>
            </div>
          </div>
        </div>
        <div className='content-container-detail'>
          <h1>CHIA SẺ TỪ CHUYÊN GIA</h1>
          <div className='content-detail'>
            <div className='detail'>
              <div className='album-clip-once'>
                <div className='overclay'>
                  <i className='fa fa-play' aria-hidden='true'></i>
                </div>
              </div>
              <h2>Ronald Rivest on Building Better Elections</h2>
              <div className='clock-time'>
                <i className='fas fa-clock'></i>
                <p>2:46</p>
              </div>
            </div>
            <div className='detail'>
              <div className='album-clip-second'>
                <div className='overclay'>
                  <i className='fa fa-play' aria-hidden='true'></i>
                </div>
              </div>
              <h2>Scarlett Howard on the Lessons of Teaching Bees Math</h2>
              <div className='clock-time'>
                <i className='fas fa-clock'></i>
                <p>2:46</p>
              </div>
            </div>
            <div className='detail'>
              <div className='album-clip-third'>
                <div className='overclay'>
                  <i className='fa fa-play' aria-hidden='true'></i>
                </div>
              </div>
              <h2>Scarlett Howard on the Lessons of Teaching Bees Math</h2>
              <div className='clock-time'>
                <i className='fas fa-clock'></i>
                <p>2:46</p>
              </div>
            </div>
            <div className='detail'>
              <div className='album-clip-fourth'>
                <div className='overclay'>
                  <i className='fa fa-play' aria-hidden='true'></i>
                </div>
              </div>
              <h2>Scarlett Howard on the Lessons of Teaching Bees Math</h2>
              <div className='clock-time'>
                <i className='fas fa-clock'></i>
                <p>2:46</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
