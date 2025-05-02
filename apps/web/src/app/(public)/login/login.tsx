"use server";
import { PrismaClient } from "@/db/prisma";
import { createSession } from "@/lib/session/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function login(values: {
	email: string;
	password: string;
	remember: boolean;
}) {
	const prisma = new PrismaClient();

	const user = await prisma.user.findFirst({
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

	await createSession(user.id);

	redirect("/dashboard");
}
