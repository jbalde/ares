"use client";
import { Button, Form, Input } from "antd";
import { Customer } from "@/lib/db/prisma";
import { updateCustomer } from "./update-customer";

export default function EditCustomerForm({
  customer,
}: {
  customer: Customer;
}) {
  const onFinish = async (values: { name?: string; email?: string; phone?: string }) => {
    await updateCustomer({ id: customer.id, ...values });
  };

  return (
    <Form initialValues={customer} onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="name" label="Name">
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
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
