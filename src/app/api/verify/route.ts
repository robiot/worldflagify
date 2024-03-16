import { enviroment } from "@/lib/enviroment";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export type VerifyReply = {
  code: string;
  detail?: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const reqBody = {
    merkle_root: body.merkle_root,
    nullifier_hash: body.nullifier_hash,
    proof: body.proof,
    verification_level: body.verification_level,
    action: "report",
    signal: body.signal ?? "", // if we don't have a signal, use the empty string
  };

  const verifyRes = await fetch(
    `https://developer.worldcoin.org/api/v1/verify/${enviroment.WI_APP_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );

  const wldResponse = await verifyRes.json();

  if (verifyRes.status == 200) {
    // this is where you should perform backend actions based on the verified credential
    // i.e. setting a user as "verified" in a database
    return new Response("success", { status: verifyRes.status });
  } else {
    // return the error code and detail from the World ID /verify endpoint to our frontend
    return new Response(
      JSON.stringify({
        code: wldResponse.code,
        detail: wldResponse.detail,
      }),
      { status: verifyRes.status }
    );
  }
}
