import { Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import EditArticleForm from "./form";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const prisma = new PrismaClient();
  const article = await prisma.knowledgeBaseArticle.findUnique({
    where: { id: Number(id) },
  });

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card variant="borderless" title="Edit article">
          <EditArticleForm article={article} />
        </Card>
      </Col>
    </Row>
  );
}
