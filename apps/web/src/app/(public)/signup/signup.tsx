"use server";
import { PrismaClient } from "@/db/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function signup(values: {
	name: string;
	password: string;
	email: string;
}) {
	const hashedPassword = await bcrypt.hash(values.password, 10);

	const prisma = new PrismaClient();

	const user = await prisma.user.create({
		data: {
			email: values.email,
			password: hashedPassword,
			name: values.name,
		},
	});

	redirect("/login");
}
