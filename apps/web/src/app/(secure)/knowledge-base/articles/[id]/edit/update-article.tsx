"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateArticle(values: {
	id: number;
	title?: string;
	slug?: string;
	content?: string;
}) {
	const prisma = new PrismaClient();
	await prisma.knowledgeBaseArticle.update({
		where: { id: values.id },
		data: {
			title: values.title,
			slug: values.slug,
			content: values.content,
		},
	});

	revalidateTag("list-articles");
	redirect(`/knowledge-base/articles/${values.id}`);
}
