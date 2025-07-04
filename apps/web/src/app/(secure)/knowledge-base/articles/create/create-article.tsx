"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createArticle(values: {
	title: string;
	slug: string;
	content: string;
}) {
	const prisma = new PrismaClient();

	const article = await prisma.knowledgeBaseArticle.create({
		data: {
			title: values.title,
			slug: values.slug,
			content: values.content,
			tenantId: 2,
			createdById: 1,
		},
	});

	revalidateTag("list-articles");
	redirect(`/knowledge-base/articles/${article.id}`);
}
