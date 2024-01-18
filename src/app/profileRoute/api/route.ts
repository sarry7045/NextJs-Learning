import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  //Second Way Headers
  const headersList = headers();
  console.log(headersList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("theme", theme);

  //Second way Cookies
  cookies().set("resultsPerPage", "20");
  console.log(cookies().get("resultsPerPage"));

  return new Response("Profile Route", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
