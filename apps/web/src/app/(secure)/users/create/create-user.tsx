"use server";
import { PrismaClient } from "@/db/prisma";
import bcrypt from "bcrypt";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(values: { name: string; email: string; password: string }) {
  const prisma = new PrismaClient();
  const hashedPassword = await bcrypt.hash(values.password, 10);

  await prisma.user.create({
    data: {
      name: values.name,
      email: values.email,
      password: hashedPassword,
    },
  });

  revalidateTag("list-users");
  redirect("/users");
}
