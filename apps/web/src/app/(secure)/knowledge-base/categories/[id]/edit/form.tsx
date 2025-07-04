"use client";
import { Button, Form, Input } from "antd";
import { KnowledgeBaseCategory } from "@/db/prisma";
import { updateCategory } from "./update-category";

export default function EditCategoryForm({ category }: { category: KnowledgeBaseCategory }) {
  const onFinish = async (values: { name?: string; slug?: string }) => {
    await updateCategory({ id: category.id, ...values });
  };

  return (
    <Form initialValues={category} onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="name" label="Name">
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="slug" label="Slug">
        <Input placeholder="Slug" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
