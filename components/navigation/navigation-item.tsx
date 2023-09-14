"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

interface INavigationItem {
  id: string;
  imageUrl: string;
  name: string;
}
const NavigationItem = ({ id, imageUrl, name }: INavigationItem) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[30px]",
            params?.serverId === id ? "h-[36px] " : "h-[10px]"
          )}
        />

        <div
          className={cn(
            "relative group mx-3 h-12 w-12 rounded-full transition-all overflow-hidden",
            params?.serverId === id && "bg-primary/10 text-primary"
          )}
        >
          <Image fill src={imageUrl} objectFit="cover" alt="channel" />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
