"use server";
import { PrismaClient } from "@/db/prisma";
import { redirect } from "next/navigation";

export async function updatePortal(values: { id: number; name?: string; slug?: string; url?: string; description?: string }) {
  const prisma = new PrismaClient();
  await prisma.portal.update({
    where: { id: values.id },
    data: {
      name: values.name,
      slug: values.slug,
      url: values.url,
      description: values.description,
    },
  });

  redirect(`/knowledge-base/portals/${values.id}`);
}
