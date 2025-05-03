"use client";
import { Button, Flex, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signup } from "./signup";

export default function RegisterForm() {
	const router = useRouter();

	return (
		<Flex justify="center" align="center" vertical style={{ height: "100%" }}>
			<Image
				src="/logos/logo.png"
				alt="logo"
				height={64}
				width={150}
				style={{
					margin: "0 0 0 16px",
					padding: "5px",
					width: "auto",
					height: "64px",
				}}
			/>
			<Form
				name="register"
				initialValues={{ remember: true }}
				style={{ maxWidth: 360 }}
				onFinish={signup}
			>
				<Form.Item
					name="name"
					rules={[{ required: true, message: "Please input your name!" }]}
				>
					<Input prefix={<UserOutlined />} placeholder="name" />
				</Form.Item>
				<Form.Item
					name="email"
					rules={[{ required: true, message: "Please input your email!" }]}
				>
					<Input prefix={<UserOutlined />} placeholder="email" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please input your Password!" }]}
				>
					<Input
						prefix={<LockOutlined />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Button block type="primary" htmlType="submit">
						Signup
					</Button>
				</Form.Item>
			</Form>
		</Flex>
	);
}
