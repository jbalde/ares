import { Avatar, Button, Dropdown, Flex, MenuProps, Select, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { User03Icon } from "@hugeicons/core-free-icons";

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
							icon={<Avatar icon={<HugeiconsIcon icon={User03Icon} />} />}
							size="large"
						></Button>
					</Dropdown>
				</Space>
			</Flex>
		</Header>
	);
}
