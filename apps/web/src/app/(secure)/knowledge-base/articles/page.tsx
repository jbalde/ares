import { Breadcrumb, Button, Card, Col, Row } from "antd";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home07Icon } from "@hugeicons/core-free-icons";
import ArticlesTableComponent from "./articles-table";
import { PrismaClient } from "@/db/prisma";
import { unstable_cache } from "next/cache";
import Link from "next/link";

const getArticles = unstable_cache(
	async () => {
		const prisma = new PrismaClient();
		return prisma.knowledgeBaseArticle.findMany({});
	},
	["list-articles"],
	{ revalidate: 10, tags: ["list-articles"] }
);

export default async function KnowledgeBasePage() {
        const articles = await getArticles();

        return (
                <Row gutter={[16, 16]}>
                        <Col span={24}>
                                <Breadcrumb
                                        items={[
                                                {
                                                        href: "/",
                                                        title: <HugeiconsIcon icon={Home07Icon} size={20} />,
                                                },
                                                { href: "/knowledge-base/articles", title: "Knowledge Base" },
                                        ]}
                                />
                        </Col>
                        <Col span={24}>
                                <h1>Knowledge Base</h1>
                        </Col>
			<Col span={24}>
				<Link href="/knowledge-base/articles/create">
					<Button type="primary">Create article</Button>
				</Link>
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
