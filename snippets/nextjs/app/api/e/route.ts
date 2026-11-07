// Same-origin proxy for the Beaconly tracker. Copy to app/api/e/route.ts,
// then load the tracker with data-api="/api/e".
import { after } from "next/server";
import { forwardBeacon } from "@/lib/beaconly";

export async function POST(req: Request) {
  const body = await req.text().catch(() => "");
  after(() => forwardBeacon(req.headers, body));
  return new Response(null, { status: 204 });
}
