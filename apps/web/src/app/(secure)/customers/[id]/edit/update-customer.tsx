"use server";
import { PrismaClient } from "@/db/prisma";
import { redirect } from "next/navigation";

export async function updateCustomer(values: {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
}) {
  const prisma = new PrismaClient();
  await prisma.customer.update({
    where: { id: values.id },
    data: {
      name: values.name,
      email: values.email,
      phone: values.phone,
    },
  });

  redirect(`/customers/${values.id}`);
}
