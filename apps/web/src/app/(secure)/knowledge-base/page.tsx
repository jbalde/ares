import { Card, Col, Row } from "antd";
import ArticlesTableComponent from "./articles-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";

const getArticles = unstable_cache(
  async () => {
    const prisma = new PrismaClient();
    return prisma.knowledgeBaseArticle.findMany({});
  },
  ["list-articles"],
  { revalidate: 10, tags: ["list-articles"] },
);

export default async function KnowledgeBasePage() {
  const articles = await getArticles();

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h1>Knowledge Base</h1>
      </Col>
      <Col span={24}>
        <Card variant="borderless">
          <h2>Articles</h2>
          <ArticlesTableComponent articles={articles} />
        </Card>
      </Col>
    </Row>
  );
}
