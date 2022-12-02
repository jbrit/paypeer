import Head from "next/head";
import Link from "next/link";
import { Button, Form, Input, Row, Col, Typography } from "antd";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Head>
        <title>Paypeer | Login</title>
        <meta name="description" content="Paypeer  Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col span={8} offset={8}>
          <Typography.Title level={2} style={{paddingTop: "5rem", textAlign: "center"}}>
            <span>Paypeer</span><span style={{fontWeight: 400}}> | Login</span>
          </Typography.Title>
          <p style={{textAlign: "center", marginBottom: "3rem", fontSize: "1rem"}}>Not registered? <Link href ="/register">Register</Link></p>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
