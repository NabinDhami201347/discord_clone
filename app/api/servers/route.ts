import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { MemberRole } from "@prisma/client";

export async function POST(req: Request, res: Response) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await currentProfile();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    const server = await db.server.create({
      data: {
        name,
        imageUrl,
        profileId: profile.id,
        inviteCode: uuidv4(),
        channels: {
          create: [{ name: "General", profileId: profile.id }],
        },

        members: {
          create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_POST] ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
