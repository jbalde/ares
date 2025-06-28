"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createTenant(values: { name: string }) {
	const prisma = new PrismaClient();

	const tenant = await prisma.tenant.create({
		data: {
			name: values.name,
		},
	});

	revalidateTag("list-tenants");
	redirect(`/tenants/${tenant.id}`);
}
