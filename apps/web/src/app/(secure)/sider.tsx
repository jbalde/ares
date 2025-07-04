import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Alert02Icon,
	AnalysisTextLinkIcon,
	BookOpen01Icon,
	Configuration01Icon,
	ConnectIcon,
	ContactBookIcon,
	DashboardSpeed01Icon,
	FileUnknownIcon,
	LibraryIcon,
	LicenseIcon,
	OfficeIcon,
	Timer02Icon,
	User03Icon,
	UserGroup03Icon,
	ViewIcon,
	WebDesign01Icon,
} from "@hugeicons/core-free-icons";

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
						icon: <HugeiconsIcon icon={DashboardSpeed01Icon} />,
						label: <Link href="/dashboard">Dashboard</Link>,
					},
					{
						key: "tickets",
						icon: <HugeiconsIcon icon={FileUnknownIcon} />,
						label: <Link href="/tickets">Tickets</Link>,
					},
					{
						key: "customers",
						icon: <HugeiconsIcon icon={ContactBookIcon} />,
						label: <Link href="/customers">Customers</Link>,
					},
					{
						key: "users",
						icon: <HugeiconsIcon icon={User03Icon} />,
						label: <Link href="/users">Users</Link>,
					},
					{
						key: "teams",
						icon: <HugeiconsIcon icon={UserGroup03Icon} />,
						label: <Link href="/teams">Teams</Link>,
					},
					{
						key: "tenants",
						icon: <HugeiconsIcon icon={OfficeIcon} />,
						label: <Link href="/tenants">Tenants</Link>,
					},
					{
						key: "knowledge-base",
						icon: <HugeiconsIcon icon={LibraryIcon} />,
						label: "Knowledge Base",
						children: [
							{
								key: "kb-articles",
								icon: <HugeiconsIcon icon={LicenseIcon} />,
								label: <Link href="/knowledge-base/articles">Articles</Link>,
							},
							{
								key: "kb-categories",
								icon: <HugeiconsIcon icon={BookOpen01Icon} />,
								label: (
									<Link href="/knowledge-base/categories">Categories</Link>
								),
							},
							{
								key: "kb-portals",
								icon: <HugeiconsIcon icon={WebDesign01Icon} />,
								label: <Link href="/knowledge-base/portals">Portals</Link>,
							},
						],
					},
					{
						key: "monitoring",
						icon: <HugeiconsIcon icon={ViewIcon} />,
						label: <Link href="/monitoring">Monitoring</Link>,
					},
					{
						key: "reports",
						icon: <HugeiconsIcon icon={AnalysisTextLinkIcon} />,
						label: <Link href="/reports">Reports</Link>,
					},
					{
						key: "slas",
						icon: <HugeiconsIcon icon={Timer02Icon} />,
						label: <Link href="/slas">SLAs</Link>,
					},
					{
						key: "integrations",
						icon: <HugeiconsIcon icon={ConnectIcon} />,
						label: <Link href="/integrations">Integrations</Link>,
					},
					{
						key: "alerts",
						icon: <HugeiconsIcon icon={Alert02Icon} />,
						label: <Link href="/alerts">Alerts</Link>,
					},
					{
						key: "settinsgs",
						icon: <HugeiconsIcon icon={Configuration01Icon} />,
						label: <Link href="/settings">Settings</Link>,
					},
				]}
			/>
		</Sider>
	);
}
