"use client";
import { Button, Form, Input } from "antd";
import { createPortal } from "./create-portal";

export default function CreatePortalForm() {
  const onFinish = async (values: { name: string; slug: string; url: string; description?: string }) => {
    await createPortal(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input name" }]}> 
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="slug" label="Slug" rules={[{ required: true, message: "Please input slug" }]}> 
        <Input placeholder="Slug" />
      </Form.Item>
      <Form.Item name="url" label="URL" rules={[{ required: true, message: "Please input url" }]}> 
        <Input placeholder="URL" />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input placeholder="Description" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Create portal
        </Button>
      </Form.Item>
    </Form>
  );
}
