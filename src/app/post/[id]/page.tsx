import { buttonVariants } from "@/src/components/ui/Button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";
import { prisma } from "@/src/utils/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

interface IdPageProps {
  params: Promise<{ id: string }>;
}
export default async function IdPage({ params }: IdPageProps) {
  const { id } = await params;
  const data = await getData(id);
  const postDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(data.createdAt);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link className={buttonVariants({ variant: "secondary" })} href="/">
        Back to posts
      </Link>

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                className="object-cover"
                src={data.authorImage}
                alt={data.authorName}
                fill
              />
            </div>
            <p className="font-medium">{data.authorName}</p>
          </div>
          <p className="text-gray-500 text-sm">{postDate}</p>
        </div>

        <div className=" mt-2 relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
          <Image
            className="object-fit"
            src={data.imageUrl}
            alt={data.title}
            fill
            priority
          />
        </div>

        <Card>
          <CardContent>
            <p className="text-gray-700">{data.content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
