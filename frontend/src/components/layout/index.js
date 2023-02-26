import React from 'react';
import { Layout } from 'antd';
import { ContentLayout } from '../content';
import { FooterLayout } from '../footer';
import { HeaderLayout } from '../header';

// const { Header, Content, Footer } = Layout;
export const MainLayout = () => {
  return (
    <Layout>
      <HeaderLayout></HeaderLayout>
      <ContentLayout></ContentLayout>
      <FooterLayout></FooterLayout>
    </Layout>
  );
};
