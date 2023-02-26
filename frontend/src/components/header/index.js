import React from 'react';
import logo from '../../asset/image/logo1.png';
import '../layout/home/styles.css';
import { UserOutlined } from '@ant-design/icons';

export const HeaderLayout = () => {
  return (
    <div className='header_main'>
      <div className='header_container'>
        {/* <div className='container'> */}
        <a className='header_logo' href='# '>
          <img src={logo} alt='logo'></img>
        </a>
        <div className='header_navbar'>
          <nav className='nav'>
            <ul>
              <li>Trang chủ</li>
              <li>Nhập liệu</li>
              <li>AI</li>
              <li>Liên hệ</li>
            </ul>
          </nav>
        </div>
        <div className='header_avt'>
          <UserOutlined style={{ margin: '12px' }} />
        </div>
        <div className='log-out'>Đăng xuất</div>
      </div>
    </div>
  );
};
