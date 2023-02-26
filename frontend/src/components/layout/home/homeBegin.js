import React from 'react';
import { HeaderLayout } from '../../header';
import logo from '../../../asset/image/logo1.png';
import './styles.css';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const HomeBegin = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    let path = '/register';
    navigate(path);
  };
  const handelLogin = () => {
    let path = '/login';
    navigate(path);
  };
  const handleHome = () => {
    let path = '/';
    navigate(path);
  };
  return (
    <div className='header_main'>
      <div className='header_container'>
        {/* <div className='container'> */}
        <a className='header_logo' href='# '>
          <img src={logo} alt='logo' onClick={handleHome}></img>
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
        {/* <div className='header_avt'>
          <UserOutlined style={{ margin: '12px' }} />
        </div>
        <div className='log-out'>Đăng xuất</div> */}

        <div className='header_login' onClick={handelLogin}>
          Login
        </div>
        <div className='header_signup' onClick={handleRegister}>
          Signup
        </div>
      </div>
    </div>
  );
};
