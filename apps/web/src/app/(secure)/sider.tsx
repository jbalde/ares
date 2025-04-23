import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
	AlertOutlined,
	ApiOutlined,
	BarChartOutlined,
	DashboardOutlined,
	ExceptionOutlined,
	EyeOutlined,
	FieldTimeOutlined,
	ReadOutlined,
	SettingOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

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
						key: "dashboard",
						icon: <DashboardOutlined />,
						label: <Link href="/dashboard">Dashboard</Link>,
					},
					{
						key: "tickets",
						icon: <ExceptionOutlined />,
						label: <Link href="/tickets">Tickets</Link>,
					},
					{
						key: "users",
						icon: <UserOutlined />,
						label: "Users",
					},
					{
						key: "teams",
						icon: <TeamOutlined />,
						label: "Teams",
					},
					{
						key: "knowledge-base",
						icon: <ReadOutlined />,
						label: "Knowledge Base",
					},
					{
						key: "monitoring",
						icon: <EyeOutlined />,
						label: "Monitoring",
					},
					{
						key: "reports",
						icon: <BarChartOutlined />,
						label: "Reports",
					},
					{
						key: "slas",
						icon: <FieldTimeOutlined />,
						label: "SLAs",
					},
					{
						key: "integrations",
						icon: <ApiOutlined />,
						label: "Integrations",
					},
					{
						key: "alerts",
						icon: <AlertOutlined />,
						label: "Alerts",
					},
					{
						key: "settinsgs",
						icon: <SettingOutlined />,
						label: "Settings",
					},
				]}
			/>
		</Sider>
	);
}
