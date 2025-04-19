import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import Image from "next/image";

export default function SiderComponent() {
	return (
		<Sider collapsible>
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
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={["1"]}
				items={[
					{
						key: "1",
						icon: <UserOutlined />,
						label: "nav 1",
					},
					{
						key: "2",
						icon: <VideoCameraOutlined />,
						label: "nav 2",
					},
					{
						key: "3",
						icon: <UploadOutlined />,
						label: "nav 3",
					},
				]}
			/>
		</Sider>
	);
}
