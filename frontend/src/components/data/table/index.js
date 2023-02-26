import React from 'react';
import { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, Modal, Input, Form, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Service } from '../service';

const emptyData = {
  id: null,
  fistName: '',
  middleName: '',
  lastName: '',
  email: '',
  birthday: null,
  address: '',
  phone: null,
  identification: null,
};

export const DataTable = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(emptyData);
  const [modal, setModal] = useState(false);
  // const handleDelete = (key) => {
  //   const newData = patients.filter((item) => item.key !== key);
  //   setPatients(newData);
  //   console.log(newData);
  // };
  const editData = (patient) => {
    setPatient({ ...patient });
    setModal(true);
  };

  const handleModalOk = () => {
    setModal(true);
  };
  const handleModalCancel = () => {
    setModal(false);
  };
  // const actionTemplate = (rowdata) => {
  //   return <Button type='primary' onClick={() => editData(rowdata)}></Button>;
  // };

  const productService = new Service();
  useEffect(() => {
    productService.getPatient().then((data) => setPatients(data));
  }, []);
  const rulesTable = [
    {},
    {
      type: 'string',
      message1: 'The input is not valid',
      message2: 'Please input your first name',
    },
    {
      type: 'string',
      message1: 'The input is not valid',
      message2: 'Please input your middle name',
    },
    {
      type: 'string',
      message1: 'The input is not valid',
      message2: 'Please input your last name',
    },
    {
      type: 'email',
      message1: 'The input is not valid',
      message2: 'Please input your e-mail',
    },
    {
      type: 'date',
      message1: 'The input is not valid',
      message2: 'Please input your birthday',
    },
    {
      type: 'string',
      message1: 'The input is not valid',
      message2: 'Please input your address',
    },
    {
      type: 'number',
      message1: 'The input is not valid',
      message2: 'Please input your phone number',
    },
    {
      type: 'number',
      message1: 'The input is not valid',
      message2: 'Please input your identification',
    },
  ];
  const tableColumn = [
    {
      title: 'No.',
      width: 20,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      width: 100,
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Middle Name',
      width: 100,
      dataIndex: 'middleName',
      key: 'middleName',
    },
    {
      title: 'Last Name',
      width: 100,
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'E-mail',
      width: 100,
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Birthday',
      width: 100,
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Address',
      width: 100,
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      width: 100,
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'ID',
      width: 100,
      dataIndex: 'identification',
      key: 'identification  ',
    },
    {
      title: 'Action',
      render: (_, record) =>
        patients.length >= 1 ? (
          <Popconfirm
            title='Sure to update?'
            onConfirm={() => editData(record.key)}
          >
            <a> Edit </a>
          </Popconfirm>
        ) : null,
      width: 50,
    },
  ];
  let newTableColumn = tableColumn.slice(0, tableColumn.length - 1);
  console.log(newTableColumn);

  // let formModal = newTableColumn.map(col =>
  //   <Form.Item
  //     name={col.key}
  //     label={col.title}
  //     // rules={[
  //     //   {
  //     //     type: rulesTable.type,
  //     //     message: rulesTable.message1,
  //     //   },
  //     //   {
  //     //     required: true,
  //     //     message: rulesTable.message2,
  //     //   },
  //     // ]}
  //   >
  //     <Input />;
  //   </Form.Item>;
  // );

  return (
    <div>
      <Input
        type='search'
        style={{
          maxWidth: '700px',
          float: 'left',
        }}
      ></Input>
      <Button
        icon={<SearchOutlined />}
        style={{
          float: 'left',
        }}
      >
        Search
      </Button>
      <Button
        type='primary'
        style={{
          float: 'right',
          marginBottom: 16,
          width: '96px',
        }}
      >
        + New
      </Button>
      <Table columns={tableColumn} dataSource={patients} />
      {/* <Table.Column
        title='action'
        render={(_, record) =>
          patients.length >= 1 ? (
            <Popconfirm
              title='Sure to update?'
              onConfirm={() => editData(record.key)}
            >
              <a> Edit </a>
            </Popconfirm>
          ) : null
        }
      /> */}
      <Modal open={modal} onOk={handleModalOk} onCancel={handleModalCancel}>
        <div className='main-modal'>
          <Form
            labelCol={{ span: 6 }}
            name='modal'
            scrollToFirstError
            style={{ width: 450, marginTop: 32 }}
          >
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
            <Form.Item
              name='middle-name'
              label='Middle Name'
              rules={[
                {
                  type: 'string',
                  message: 'The input is not valid',
                },
                {
                  required: true,
                  message: 'Please input your Middle Name',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='last-name'
              label='Last Name'
              rules={[
                {
                  type: 'string',
                  message: 'The input is not valid',
                },
                {
                  required: true,
                  message: 'Please input your Last Name',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='email'
              label='E-mail'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid',
                },
                {
                  required: true,
                  message: 'Please input your Email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='birthday'
              label='Birthday'
              rules={[
                {
                  type: 'date',
                  message: 'The input is not valid',
                },
                {
                  required: true,
                  message: 'Please input your birthday',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='address'
              label='Address'
              rules={[
                {
                  type: 'string',
                  message: 'The input is not valid',
                },
                {
                  required: true,
                  message: 'Please input your address',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='phone'
              label='Phone'
              rules={[
                {
                  type: 'number',
                  message: 'The input is not valid',
                },
                {
                  required: true,
                  message: 'Please input your phone',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='identification'
              label='ID'
              rules={[
                {
                  type: 'number',
                  message: 'The input is not valid',
                },
                {
                  required: true,
                  message: 'Please input your id',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
