"use client";
import { Button, Form, Input } from "antd";
import { User } from "@/lib/db/prisma";
import { updateUser } from "./update-user";

export default function EditUserForm({ user }: { user: User }) {
	const onFinish = async (values: {
		name?: string;
		email?: string;
		password?: string;
	}) => {
		await updateUser({ id: user.id, ...values });
	};

	return (
		<Form
			initialValues={user}
			onFinish={onFinish}
			layout="vertical"
			style={{ maxWidth: 360 }}
		>
			<Form.Item name="name" label="Name">
				<Input placeholder="Name" />
			</Form.Item>
			<Form.Item name="email" label="Email">
				<Input placeholder="Email" />
			</Form.Item>
			<Form.Item>
				<Button block type="primary" htmlType="submit">
					Save
				</Button>
			</Form.Item>
		</Form>
	);
}
