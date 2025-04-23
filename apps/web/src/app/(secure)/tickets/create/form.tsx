"use client";
import { Button, Form, Input, Select } from "antd";
import { useRouter } from "next/navigation";

export default function CreateTicketForm() {
	const router = useRouter();

	const onFinish = (values: { username: string; password: string }) => {
		console.log("Received values of form: ", values);
		router.push("/dashboard");
	};

	return (
		<Form
			name="login"
			initialValues={{ remember: true }}
			style={{ maxWidth: 360 }}
			onFinish={onFinish}
		>
			<Form.Item name="customer" label="Customer">
				<Select
					options={[
						{
							label: "Customer 1",
							value: "customer1",
						},
						{
							label: "Customer 2",
							value: "customer2",
						},
						{
							label: "Customer 3",
							value: "customer3",
						},
						{
							label: "Customer 4",
							value: "customer4",
						},
						{
							label: "Customer 5",
							value: "customer5",
						},
					]}
				/>
			</Form.Item>
			<Form.Item name="tenant" label="Tenant">
				<Select
					options={[
						{
							label: "Tenant 1",
							value: "tenant1",
						},
						{
							label: "Tenant 2",
							value: "tenant2",
						},
						{
							label: "Tenant 3",
							value: "tenant3",
						},
						{
							label: "Tenant 4",
							value: "tenant4",
						},
						{
							label: "Tenant 5",
							value: "tenant5",
						},
					]}
				/>
			</Form.Item>
			<Form.Item name="subject" label="Subject">
				<Input placeholder="Subject" />
			</Form.Item>
			<Form.Item name="description" label="Description">
				<Input.TextArea placeholder="Description" />
			</Form.Item>
			<Form.Item>
				<Button block type="primary" htmlType="submit">
					Create ticket
				</Button>
			</Form.Item>
		</Form>
	);
}
