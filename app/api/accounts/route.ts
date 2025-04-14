import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import { ForbiddenError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

// get accounts
export async function GET() {
  try {
    await dbConnect();

    const accounts = await Account.find();
    return NextResponse.json(
      { success: true, data: accounts },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// create account
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    // validation
    const validatedAccount = AccountSchema.parse(body);

    const existingAccount = await Account.findOne({
      provider: validatedAccount.provider,
      providerAccountId: validatedAccount.providerAccountId,
    });
    if (existingAccount)
      throw new ForbiddenError("Account with same provider already exists.");

    const newAccount = await Account.create(validatedAccount);

    return NextResponse.json(
      { success: true, data: newAccount },
      { status: 201 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
