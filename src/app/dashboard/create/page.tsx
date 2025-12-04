import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { handleSubmission } from "../../actions";
import { SubmitButton } from "@/src/components/generals/SubmitButton";

export default function CreateBlogroute() {
  return (
    <div className="">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Title"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Content"
              ></Textarea>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image</Label>
              <Input
                name="url"
                required
                type="url"
                placeholder="Image url"
              ></Input>
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
