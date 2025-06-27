"use client";
import { KnowledgeBaseArticle } from "@/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default function ArticlesTableComponent({
  articles = [],
}: {
  articles: KnowledgeBaseArticle[];
}) {
  const dataSource = articles.map((article) => ({
    id: article.id,
    title: article.title,
    slug: article.slug,
  }));

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: any) => (
        <Link href={`/knowledge-base/${record.id}`}>{text}</Link>
      ),
    },
    { title: "Slug", dataIndex: "slug", key: "slug" },
  ];

  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
