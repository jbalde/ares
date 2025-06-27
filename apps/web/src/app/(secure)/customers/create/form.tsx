"use client";
import { Button, Form, Input } from "antd";
import { createCustomer } from "./create-customer";

export default function CreateCustomerForm() {
  const onFinish = async (values: { name: string; email?: string; phone?: string }) => {
    await createCustomer(values);
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
      <Form.Item name="email" label="Email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="phone" label="Phone">
        <Input placeholder="Phone" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Create customer
        </Button>
      </Form.Item>
    </Form>
  );
}
