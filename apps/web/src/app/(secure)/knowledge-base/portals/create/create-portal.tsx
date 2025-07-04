"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPortal(values: { name: string; slug: string; url: string; description?: string }) {
  const prisma = new PrismaClient();

  const portal = await prisma.portal.create({
    data: {
      name: values.name,
      slug: values.slug,
      url: values.url,
      description: values.description,
      tenantId: 2,
    },
  });

  revalidateTag("list-portals");
  redirect(`/knowledge-base/portals/${portal.id}`);
}
