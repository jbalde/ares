import {
	Avatar,
	Button,
	Dropdown,
	Flex,
	Layout,
	MenuProps,
	Select,
	Space,
} from "antd";
import SiderComponent from "./sider";
import { Content, Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function HeaderComponent() {
	const items: MenuProps["items"] = [
		{
			key: "profile",
			label: <Link href="/profile">Profile</Link>,
		},
		{
			key: "settings",
			label: <Link href="/settings">Settings</Link>,
		},
		{
			key: "logout",
			label: "Logout",
		},
	];

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearch = (value: string) => {
		console.log("search:", value);
	};

	return (
		<Header style={{ padding: "5px 16px" }}>
			<Flex
				align="flex-end"
				justify="center"
				vertical
				style={{ height: "100%" }}
			>
				<Space>
					<Select
						showSearch
						placeholder="Select a person"
						optionFilterProp="label"
						defaultValue="-all-"
						//onChange={onChange}
						//onSearch={onSearch}
						options={[
							{
								value: "-all-",
								label: "All tentants",
							},
						]}
					/>
					<Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
						<Button
							shape="circle"
							icon={<Avatar icon={<UserOutlined />} />}
							size="large"
						></Button>
					</Dropdown>
				</Space>
			</Flex>
		</Header>
	);
}
