import React from 'react';
import logo from '../../asset/image/logo1.png';
import { Menu, Input, Button } from 'antd';
import './styles.css';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;
export const HeaderLayout = () => {
  const onSearch = (value) => console.log(value);
  const navigate = useNavigate();
  const handleLogin = () => {
    let path = '/login';
    navigate(path);
  };
  const handleRegister = () => {
    let path = '/register';
    navigate(path);
  };
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          float: 'left',
          marginRight: 32,
          marginLeft: 32,
        }}
      >
        <a href='# '>
          <img src={logo} alt='logo' style={{ width: 120 }}></img>
        </a>
      </div>

      {/* Navbar */}
      <div>
        <Menu
          theme='dark'
          // mode='horizontal'
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 280,
            marginRight: 600,
          }}
        />
        {/*  */}
      </div>

      <Search
        placeholder='input search text'
        allowClear
        enterButton='Search'
        onSearch={onSearch}
        style={{
          width: 400,
          float: 'right',
        }}
      />

      <div style={{ float: 'right' }}>
        <Button type='primary' style={{ marginRight: 8 }} onClick={handleLogin}>
          Login
        </Button>
        <Button type='primary' onClick={handleRegister}>
          Register
        </Button>
      </div>
    </Header>
  );
};
