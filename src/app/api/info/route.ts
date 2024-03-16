import { NextRequest } from "next/server";

export type VerifyReply = {
  code: string;
  detail?: string;
};

export async function GET(req: NextRequest) {
  return new Response("This is the WorldFlagify API. It can be used to retreive wether a address/domain is flagged as malicious. For ethereum addresses use /address/:address, for web domains use /domain/:domain.", { status: 200 });
}
