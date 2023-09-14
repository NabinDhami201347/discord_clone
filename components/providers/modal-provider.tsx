"use client";

import { useEffect, useState } from "react";

import InviteModal from "@/components/modals/invite-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
    </>
  );
};
