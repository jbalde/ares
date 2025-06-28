"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateTenant(values: { id: number; name?: string }) {
	const prisma = new PrismaClient();
	await prisma.tenant.update({
		where: { id: values.id },
		data: {
			name: values.name,
		},
	});

	revalidateTag("list-tenants");
	redirect(`/tenants/${values.id}`);
}
