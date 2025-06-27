"use client";
import { Button, Form, Input } from "antd";
import { createUser } from "./create-user";

export default function CreateUserForm() {
  const onFinish = async (values: { name: string; email: string; password: string }) => {
    await createUser(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input name" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input password" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Create user
        </Button>
      </Form.Item>
    </Form>
  );
}
