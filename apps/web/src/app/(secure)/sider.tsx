import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
        AlertOutlined,
        ApiOutlined,
        BarChartOutlined,
        ContactsOutlined,
        DashboardOutlined,
        ExceptionOutlined,
        EyeOutlined,
        FieldTimeOutlined,
        ReadOutlined,
        SettingOutlined,
        TeamOutlined,
        UserOutlined,
        DeploymentUnitOutlined,
        FolderOutlined,
        GlobalOutlined,
        FileTextOutlined,
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
						key: "customers",
						icon: <ContactsOutlined />,
						label: <Link href="/customers">Customers</Link>,
					},
					{
						key: "users",
						icon: <UserOutlined />,
						label: <Link href="/users">Users</Link>,
					},
					{
						key: "teams",
						icon: <TeamOutlined />,
						label: <Link href="/teams">Teams</Link>,
					},
					{
						key: "tenants",
						icon: <DeploymentUnitOutlined />,
						label: <Link href="/tenants">Tenants</Link>,
					},
                                        {
                                                key: "knowledge-base",
                                                icon: <ReadOutlined />,
                                                label: "Knowledge Base",
                                                children: [
                                                        {
                                                                key: "kb-articles",
                                                                icon: <FileTextOutlined />,
                                                                label: <Link href="/knowledge-base">Articles</Link>,
                                                        },
                                                        {
                                                                key: "kb-categories",
                                                                icon: <FolderOutlined />,
                                                                label: <Link href="/knowledge-base/categories">Categories</Link>,
                                                        },
                                                        {
                                                                key: "kb-portals",
                                                                icon: <GlobalOutlined />,
                                                                label: <Link href="/knowledge-base/portals">Portals</Link>,
                                                        },
                                                ],
                                        },
					{
						key: "monitoring",
						icon: <EyeOutlined />,
						label: <Link href="/monitoring">Monitoring</Link>,
					},
					{
						key: "reports",
						icon: <BarChartOutlined />,
						label: <Link href="/reports">Reports</Link>,
					},
					{
						key: "slas",
						icon: <FieldTimeOutlined />,
						label: <Link href="/slas">SLAs</Link>,
					},
					{
						key: "integrations",
						icon: <ApiOutlined />,
						label: <Link href="/integrations">Integrations</Link>,
					},
					{
						key: "alerts",
						icon: <AlertOutlined />,
						label: <Link href="/alerts">Alerts</Link>,
					},
					{
						key: "settinsgs",
						icon: <SettingOutlined />,
						label: <Link href="/settings">Settings</Link>,
					},
				]}
			/>
		</Sider>
	);
}
