"use client";
import { Portal } from "@/db/prisma";
import { Table } from "antd";
import Link from "next/link";

export default function PortalsTableComponent({ portals = [] }: { portals: Portal[] }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: Portal) => (
        <Link href={`/knowledge-base/portals/${record.id}`}>{text}</Link>
      ),
    },
    { title: "Slug", dataIndex: "slug", key: "slug" },
    { title: "URL", dataIndex: "url", key: "url" },
  ];

  return <Table dataSource={portals} columns={columns} rowKey="id" />;
}
