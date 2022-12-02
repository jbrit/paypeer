import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WalletOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";

const { Header, Sider, Content } = Layout;

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {collapsed ? (
            <div style={{ color: "white", fontSize: "1.1rem", fontWeight: "500" }}>
              Pay
              <br />
              Peer
            </div>
          ) : (
            <Typography.Title level={3} style={{ color: "white" }}>
              PayPeer
            </Typography.Title>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <WalletOutlined />,
              label: "Wallet",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Profile",
            },
          ]}
        />

      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
