import { NextRequest } from "next/server";

export type VerifyReply = {
  code: string;
  detail?: string;
};

export async function GET(req: NextRequest) {
  return new Response(JSON.stringify({
    malicious: false,
    flagged_amount: 0,
    report_descriptions: [],
  }), { status: 200 });
}
