// app/api/users/route.tsx

import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = prisma.user.findMany();
  return NextResponse.json(users);
}
