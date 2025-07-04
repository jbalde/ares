"use server";
import { PrismaClient } from "@/db/prisma";
import { redirect } from "next/navigation";

export async function updateCategory(values: { id: number; name?: string; slug?: string }) {
  const prisma = new PrismaClient();
  await prisma.knowledgeBaseCategory.update({
    where: { id: values.id },
    data: {
      name: values.name,
      slug: values.slug,
    },
  });

  redirect(`/knowledge-base/categories/${values.id}`);
}
