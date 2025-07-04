import { Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import EditCategoryForm from "./form";

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
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
        <Card variant="borderless" title="Edit category">
          <EditCategoryForm category={category} />
        </Card>
      </Col>
    </Row>
  );
}
