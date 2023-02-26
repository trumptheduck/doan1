import React from 'react';
import { Input, Form } from 'antd';

export const Modal = () => {
  return (
    <div className='main'>
      <Form name='modal' scrollToFirstError style={{ width: 500 }}>
        <Form.Item
          name='first-name'
          label='Fist Name'
          rules={[
            {
              type: 'string',
              message: 'The input is not valid',
            },
            {
              required: true,
              message: 'Please input your First Name',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
