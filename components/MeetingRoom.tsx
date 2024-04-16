"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks
} from "@stream-io/video-react-sdk";
import { LayoutGrid, User2Icon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";
import { cn } from "@/lib/utils";

type CallLayout = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const [layout, setLayout] = useState("speaker-left");

  const router = useRouter();

  const [showParticipants, setShowParticipants] = useState(false);

  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState != CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;

      default:
        return <SpeakerLayout participantsBarPosition="right" />;

      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
    }
  };
  return (
    <div className="relative h-screen w-full overflow-hidden pt-4">
      <div className="relative flex justify-center size-full items-center">
        <div className="flex items-center size-full max-w-[1000px]">
          <CallLayout />
        </div>
        <div
          className={cn('h-[calc(100vh-86px)] hidden ml-2', {
            'show-block': showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed flex-wrap bottom-0 flex w-full items-center justify-center gap-5 pb-2">
        <CallControls onLeave={() => router.push(`/`)} />
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutGrid size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-white border border-slate-600 bg-slate-800">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-300" />
              {["Grid", "Speaker-Left", "Speaker-Right"].map((items, index) =>
                <div key={index}>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      setLayout(items.toLowerCase() as CallLayout);
                    }}
                  >
                    {items}
                  </DropdownMenuItem>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <CallStatsButton /> */}
          <button
            onClick={() => setShowParticipants(prev => !prev)}
            className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]"
          >
            <User2Icon size={20} className="text-white" />
          </button>
          {!isPersonalRoom && <EndCallButton />}
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
