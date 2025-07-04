import { Button, Card, Col, Row } from "antd";
import { PrismaClient } from "@/db/prisma";
import Link from "next/link";

export default async function ArticlePage({
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
				<Card
					title={article.title || "Article"}
					extra={
						<Link href={`/knowledge-base/articles/${article.id}/edit`}>
							<Button type="primary">Edit article</Button>
						</Link>
					}
				>
					<p>
						<strong>Slug:</strong> {article.slug}
					</p>
					<p>{article.content}</p>
				</Card>
			</Col>
		</Row>
	);
}
