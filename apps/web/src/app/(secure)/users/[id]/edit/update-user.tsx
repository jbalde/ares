"use server";
import { PrismaClient } from "@/db/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateUser(values: {
	id: number;
	name?: string;
	email?: string;
	password?: string;
}) {
	const prisma = new PrismaClient();
	await prisma.user.update({
		where: { id: values.id },
		data: {
			name: values.name,
			email: values.email,
		},
	});

	revalidateTag("list-users");
	redirect(`/users/${values.id}`);
}
