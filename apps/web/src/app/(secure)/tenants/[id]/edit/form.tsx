"use client";
import { Button, Form, Input } from "antd";
import { Tenant } from "@/db/prisma";
import { updateTenant } from "./update-tenant";

export default function EditTenantForm({ tenant }: { tenant: Tenant }) {
	const onFinish = async (values: { name?: string }) => {
		await updateTenant({ id: tenant.id, ...values });
	};

	return (
		<Form
			initialValues={tenant}
			onFinish={onFinish}
			layout="vertical"
			style={{ maxWidth: 360 }}
		>
			<Form.Item name="name" label="Name">
				<Input placeholder="Name" />
			</Form.Item>
			<Form.Item>
				<Button block type="primary" htmlType="submit">
					Save
				</Button>
			</Form.Item>
		</Form>
	);
}
