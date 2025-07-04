"use client";
import { Button, Form, Input } from "antd";
import { KnowledgeBaseArticle } from "@/db/prisma";
import { updateArticle } from "./update-article";

export default function EditArticleForm({
  article,
}: {
  article: KnowledgeBaseArticle;
}) {
  const onFinish = async (values: {
    title?: string;
    slug?: string;
    content?: string;
  }) => {
    await updateArticle({ id: article.id, ...values });
  };

  return (
    <Form
      initialValues={article}
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 360 }}
    >
      <Form.Item name="title" label="Title">
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item name="slug" label="Slug">
        <Input placeholder="Slug" />
      </Form.Item>
      <Form.Item name="content" label="Content">
        <Input.TextArea placeholder="Content" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
