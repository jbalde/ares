import { Button, Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import Link from "next/link";

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const prisma = new PrismaClient();
  const category = await prisma.knowledgeBaseCategory.findUnique({
    where: { id: Number(id) },
  });

  if (!category) {
    return <h1>Category not found</h1>;
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card
          title={category.name || "Category"}
          extra={
            <Link href={`/knowledge-base/categories/${category.id}/edit`}>
              <Button type="primary">Edit category</Button>
            </Link>
          }
        >
          <p>
            <strong>Slug:</strong> {category.slug}
          </p>
        </Card>
      </Col>
    </Row>
  );
}
