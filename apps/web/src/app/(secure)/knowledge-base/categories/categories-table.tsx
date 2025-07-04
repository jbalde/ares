"use client";
import { KnowledgeBaseCategory } from "@/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default function CategoriesTableComponent({ categories = [] }: { categories: KnowledgeBaseCategory[] }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: KnowledgeBaseCategory) => (
        <Link href={`/knowledge-base/categories/${record.id}`}>{text}</Link>
      ),
    },
    { title: "Slug", dataIndex: "slug", key: "slug" },
  ];

  return <Table dataSource={categories} columns={columns} rowKey="id" />;
}
