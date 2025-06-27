"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createCustomer(values: {
	name: string;
	email?: string;
	phone?: string;
}) {
	const prisma = new PrismaClient();

	const customer = await prisma.customer.create({
		data: {
			name: values.name,
			email: values.email,
			phone: values.phone,
			tenantId: 2,
		},
	});

	revalidateTag("list-customers");
	redirect(`/customers/${customer.id}`);
}
