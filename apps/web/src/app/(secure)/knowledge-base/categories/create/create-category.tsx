"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createCategory(values: { name: string; slug: string }) {
  const prisma = new PrismaClient();

  const category = await prisma.knowledgeBaseCategory.create({
    data: {
      name: values.name,
      slug: values.slug,
      tenantId: 2,
    },
  });

  revalidateTag("list-categories");
  redirect(`/knowledge-base/categories/${category.id}`);
}
