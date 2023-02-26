import React, { useContext, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from '../../../asset/image/logo1.png';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Service } from '../../data/service';
import { AppContext } from '../../context/app';
import { HomeBegin } from '../home/homeBegin';
import { Home } from '../home';
// import { Register } from '../register';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
    lg: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
    lg: {
      span: 24,
    },
  },
};

const Login = () => {
  // const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const handleRegister = () => {
    let path = '/register';
    navigate(path);
  };
  const onFinish = async (values, context) => {
    console.log('Success:', values);
    let data = await new Service().login(values.email, values.password);
    console.log(data);
    // setUsers(data);
    // console.log(users);
  };
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className='main'>
          <HomeBegin></HomeBegin>
          <div className='container_log'>
            <a className='logoBrand' href='# '>
              <img alt='logo' src={logo}></img>
            </a>
            <Form
              {...formItemLayout}
              className='login_form'
              initialValues={{
                remember: true,
              }}
              onFinish={context.login}
            >
              <Form.Item
                style={{ marginBottom: '40px', width: '350px' }}
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input placeholder='Email' />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: '40px' }}
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password type='password' placeholder='Password' />
              </Form.Item>
              <Form.Item className='check_form'>
                <Form.Item valuePropName='checked' noStyle>
                  <Checkbox className='login-form-remember'>
                    Remember me
                  </Checkbox>
                </Form.Item>

                <a className='login-form-forgot' href='# '>
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Log in
                </Button>
                Or{' '}
                <a href='# ' onClick={handleRegister}>
                  register now!
                </a>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export { Login };
