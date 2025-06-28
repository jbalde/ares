"use client";
import { Button, Form, Input } from "antd";
import { createTenant } from "./create-tenant";

export default function CreateTenantForm() {
	const onFinish = async (values: { name: string }) => {
		await createTenant(values);
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
			<Form.Item>
				<Button block type="primary" htmlType="submit">
					Create tenant
				</Button>
			</Form.Item>
		</Form>
	);
}
