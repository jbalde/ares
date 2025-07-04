"use client";
import { Button, Form, Input } from "antd";
import { Portal } from "@/db/prisma";
import { updatePortal } from "./update-portal";

export default function EditPortalForm({ portal }: { portal: Portal }) {
  const onFinish = async (values: { name?: string; slug?: string; url?: string; description?: string }) => {
    await updatePortal({ id: portal.id, ...values });
  };

  return (
    <Form initialValues={portal} onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="name" label="Name">
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name="slug" label="Slug">
        <Input placeholder="Slug" />
      </Form.Item>
      <Form.Item name="url" label="URL">
        <Input placeholder="URL" />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input placeholder="Description" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
