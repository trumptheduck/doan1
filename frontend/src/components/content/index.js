import React from 'react';
import { Breadcrumb, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { DataTable } from '../data/table';

export const ContentLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      className='site-layout'
      style={{
        padding: '0 80px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 4px',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
        }}
      >
        <DataTable />
      </div>
    </Content>
  );
};
