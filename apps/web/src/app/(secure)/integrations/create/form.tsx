"use client";
import { Button, Form, Input, Select } from "antd";
import { createIntegration } from "./create-integration";
import { IntegrationType } from "@/db/prisma";

type FormValues = Record<string, string> & { type: IntegrationType };

export default function CreateIntegrationForm() {
  const onFinish = async (values: FormValues) => {
    await createIntegration({
      type: values.type,
      config: values,
    });
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="type" label="Type" rules={[{ required: true }]}> 
        <Select options={Object.values(IntegrationType).map(t => ({ label: t, value: t }))} />
      </Form.Item>
      <Form.Item name="clientId" label="Client ID">
        <Input />
      </Form.Item>
      <Form.Item name="clientSecret" label="Client Secret">
        <Input />
      </Form.Item>
      <Form.Item name="redirectUri" label="Redirect URI">
        <Input />
      </Form.Item>
      <Form.Item name="refreshToken" label="Refresh Token">
        <Input />
      </Form.Item>
      <Form.Item name="smtpHost" label="SMTP Host">
        <Input />
      </Form.Item>
      <Form.Item name="smtpPort" label="SMTP Port">
        <Input />
      </Form.Item>
      <Form.Item name="smtpUser" label="SMTP User">
        <Input />
      </Form.Item>
      <Form.Item name="smtpPassword" label="SMTP Password">
        <Input />
      </Form.Item>
      <Form.Item name="fromAddress" label="From Address">
        <Input />
      </Form.Item>
      <Form.Item name="url" label="Webhook URL">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Create integration
        </Button>
      </Form.Item>
    </Form>
  );
}
