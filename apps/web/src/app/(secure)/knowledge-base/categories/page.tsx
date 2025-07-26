import { Breadcrumb, Button, Card, Col, Row } from "antd";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";
import CategoriesTableComponent from "./categories-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";
import Link from "next/link";

const getCategories = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.knowledgeBaseCategory.findMany({});
  },
  ["list-categories"],
  { revalidate: 10, tags: ["list-categories"] },
);

export default async function KnowledgeBaseCategoriesPage() {
  const categories = await getCategories();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Breadcrumb
          items={[
            { href: "/", title: <HugeiconsIcon icon={Home07Icon} size={20} /> },
            { href: "/knowledge-base/categories", title: "Categories" },
          ]}
        />
      </Col>
      <Col span={24}>
        <h1>Categories</h1>
      </Col>
      <Col span={24}>
        <Link href="/knowledge-base/categories/create">
          <Button type="primary">Create category</Button>
        </Link>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Categories list</h2>
          <CategoriesTableComponent categories={categories} />
        </Card>
      </Col>
    </Row>
  );
}
