"use server";
import { PrismaClient, IntegrationType, Prisma } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createIntegration(values: {
	type: IntegrationType;
	config: Prisma.InputJsonValue;
}) {
	const prisma = new PrismaClient();

	const integration = await prisma.integration.create({
		data: {
			type: values.type,
			config: values.config,
			tenantId: 2,
		},
	});

	revalidateTag("list-integrations");
	redirect(`/integrations/${integration.id}`);
}
