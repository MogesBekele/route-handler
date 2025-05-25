import { comments } from "../data";
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const comment = comments.find((comment) => comment.id === id);

  if (!comment) {
    return new Response("Comment not found", {
      status: 404,
    });
  }
  return Response.json(comment);
}
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === id);

  if (!comment) {
    return new Response("Comment not found", {
      status: 404,
    });
  }

  const updatedComment = await request.json();
  comment.text = updatedComment.text;

  return Response.json(comment);
}
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const commentIndex = comments.findIndex((comment) => comment.id === id);
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  const deletedComment = comments[commentIndex];
  comments.splice(commentIndex, 1);
  return Response.json(deletedComment);
}
