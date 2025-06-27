"use client";
import { KnowledgeBaseArticle } from "@/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default function ArticlesTableComponent({
	articles = [],
}: {
	articles: KnowledgeBaseArticle[];
}) {
	const columns = [
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
			render: (text: string, record: KnowledgeBaseArticle) => (
				<Link href={`/knowledge-base/${record.id}`}>{text}</Link>
			),
		},
		{ title: "Slug", dataIndex: "slug", key: "slug" },
	];

	return <Table dataSource={articles} columns={columns} rowKey="id" />;
}
