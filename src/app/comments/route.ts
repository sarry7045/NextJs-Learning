import { comments } from "./data";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParam = request.nextUrl.searchParams;
  const query = searchParam.get("query");
  const filteredComments = query
    ? comments.filter((comm) => comm.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newcomment);
  return new Response(JSON.stringify(newcomment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
