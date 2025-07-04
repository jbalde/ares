"use client";
import { Button, Form, Input } from "antd";
import { createCategory } from "./create-category";

export default function CreateCategoryForm() {
  const onFinish = async (values: { name: string; slug: string }) => {
    await createCategory(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input name" }]}> 
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="slug" label="Slug" rules={[{ required: true, message: "Please input slug" }]}> 
        <Input placeholder="Slug" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Create category
        </Button>
      </Form.Item>
    </Form>
  );
}
