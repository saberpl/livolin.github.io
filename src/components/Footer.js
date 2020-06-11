import React from 'react';
import logo from '../img/logo.png';

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section-links'>
          <div className='links'>
            <img src={logo} className='logo-footer' alt='' />
            <p className='icon-contact'>
              <i className='fa fa-twitter' aria-hidden='true'></i>
              <i className='fa fa-facebook' aria-hidden='true'></i>
              <i className='fa fa-instagram' aria-hidden='true'></i>
              <i className='fa fa-linkedin' aria-hidden='true'></i>
            </p>
          </div>
        </div>
        <div className='footer-section-address'>
          <h1>VPĐD MEGA LIFESCIENCES PUBLIC COMPANY LIMITED TẠI TP.HCM</h1>
          <div className='address'>
            <i className='fa fa-map-marker' aria-hidden='true'></i>Tầng 5 Toà
            nhà Etown 1, 364 Cộng Hoà, Quận Tân Bình, TP.HCM
          </div>
          <div className='address'>
            <i className='fa fa-phone' aria-hidden='true'></i>84-28-38 123 166
          </div>
          <div className='address'>
            <i className='fa fa-envelope' aria-hidden='true'></i>
            Megavietnam@megawecare.com
          </div>
        </div>
        <div className='footer-section-about'>
          <div className='about'>
            <h1>GIẤY PHÉP QUẢNG CÁO</h1>
            <p>Số giấy phép: 79-03724-01</p>
            <p>Số giấy xác nhận quảng cáo thuốc</p>
          </div>
          <div className='about'>
            <h1>THÔNG TIN HỖ TRỢ</h1>
            <p>Điều khoản sử dụng</p>
            <p>Quy trình đăng tải thông tin</p>
            <p>Chính sách bảo mật</p>
          </div>
        </div>
      </div>

      <div className='line'></div>

      <div className='footer-bottom'>
        <p>
          Inter LIVOLIN FORTE 2020 - 2028 | Privacy Policy | Responsible
          Disclosure
        </p>
      </div>
    </div>
  );
};

export default Footer;
