import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { FC } from "react";

interface ServerIdProps {
  params: {
    serverId: string;
  };
}

const ServerId: FC<ServerIdProps> = async ({ params }) => {
  const profile = await currentProfile();

  if (!profile) return redirectToSignIn();

  const server = await db.server.findUnique({
    where: { id: params.serverId, members: { some: { profileId: profile.id } } },
    include: { channels: { where: { name: "general" }, orderBy: { createAt: "asc" } } },
  });

  const initalChannels = server?.channels[0];

  if (initalChannels?.name === " general") return null;

  return redirect(`/servers/${params.serverId}/channels/${initalChannels?.id}`);
};

export default ServerId;
