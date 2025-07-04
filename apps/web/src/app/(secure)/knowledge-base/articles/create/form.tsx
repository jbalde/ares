"use client";
import { Button, Form, Input } from "antd";
import { createArticle } from "./create-article";

export default function CreateArticleForm() {
  const onFinish = async (values: {
    title: string;
    slug: string;
    content: string;
  }) => {
    await createArticle(values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input title" }]}
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        name="slug"
        label="Slug"
        rules={[{ required: true, message: "Please input slug" }]}
      >
        <Input placeholder="Slug" />
      </Form.Item>
      <Form.Item
        name="content"
        label="Content"
        rules={[{ required: true, message: "Please input content" }]}
      >
        <Input.TextArea placeholder="Content" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Create article
        </Button>
      </Form.Item>
    </Form>
  );
}
