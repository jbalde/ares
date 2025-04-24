"use server";
import { PrismaClient } from "@/db/prisma";

export async function signup(values: {
	name: string;
	password: string;
	email: string;
}) {
	const prisma = new PrismaClient();

	console.log("Received values of form: ", values);

	const user = await prisma.user.create({
		data: {
			email: values.email,
			password: values.password,
			name: values.name,
		},
	});

	console.log("User created: ", user);
	return user;
}
