import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

const comment = comments.find((comment)=>comment.id === id)

  if (!comment) {
    return new Response("Comment not found", {
      status: 404,
    });
  }
  return Response.json(comment);
}
