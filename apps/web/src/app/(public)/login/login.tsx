"use server";
import { PrismaClient } from "@/db/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function login(values: {
	email: string;
	password: string;
	remember: boolean;
}) {
	const hashedPassword = await bcrypt.hash(values.password, 10);

	const prisma = new PrismaClient();

	const user = await prisma.user.findUnique({
		where: {
			email: values.email,
		},
	});

	if (!user) {
		throw new Error("User not found");
	}

	const isValidPassword = await bcrypt.compare(values.password, user.password);

	if (!isValidPassword) {
		throw new Error("Invalid password");
	}

	redirect("/dashboard");
}
