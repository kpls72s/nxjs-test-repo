"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("api/auth/register");
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const url = formData.get("url");

  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorID: user?.id as string,
      authorImage: "https://avatar.iran.liara.run/public/30",
      authorName: user?.given_name as string,
    },
  });

  redirect("/dashboard");
}
