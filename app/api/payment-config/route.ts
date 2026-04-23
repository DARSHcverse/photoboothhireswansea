import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
  const buyButtonId = process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID || "";

  if (!publishableKey || !buyButtonId) {
    return NextResponse.json(
      { error: "Payment configuration is missing." },
      { status: 503 },
    );
  }

  return NextResponse.json({
    publishableKey,
    buyButtonId,
  });
}
