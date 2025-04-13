import tickets from "@/app/database";
import { NextResponse } from "next/server";

// /api/tickets
export async function GET() {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  //   const body = await request.json();
  // extract it what we want
  const { name } = await request.json();

  return NextResponse.json(name);
}
