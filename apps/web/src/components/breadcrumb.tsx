"use client";
import { Breadcrumb } from "antd";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import {
	BreadcrumbItemType,
	BreadcrumbSeparatorType,
	ItemType,
} from "antd/es/breadcrumb/Breadcrumb";

export async function BreadcrumbComponent({
	items,
}: {
	items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
}) {
	const breadcrumbItems: ItemType[] = [
		{
			href: "/",
			title: <HugeiconsIcon icon={Home07Icon} size={20} />,
		},
		...items,
	];

	const itemRender = (currentRoute: ItemType): React.ReactNode => {
		return <Link href={currentRoute.href!}>{currentRoute.title}</Link>;
	};

	return <Breadcrumb items={breadcrumbItems} itemRender={itemRender} />;
}
