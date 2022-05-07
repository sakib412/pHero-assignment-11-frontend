import { Layout, Menu } from 'antd';
import './App.css'

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div className="logo"></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

export default App