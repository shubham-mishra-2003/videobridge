"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import { CalendarClock, SquarePlay, Play, Videotape, ArrowLeftToLine} from "lucide-react";
import Loader from "./Loader";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const {
    endedCalls,
    upcomingCalls,
    isLoading,
    callRecordings
  } = useGetCalls();

  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const router = useRouter();
  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;

      case "recordings":
        return recordings;

      case "upcoming":
        return upcomingCalls;

      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No previous meetings";

      case "recordings":
        return "No recordings";

      case "upcoming":
        return "No upcoming meetings";

      default:
        return "";
    }
  };

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if(isLoading) return <Loader />

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
    {calls && calls.length > 0 ? (
      calls.map((meeting: Call | CallRecording) => (
        <MeetingCard
          key={(meeting as Call).id}
          icon={
            type === 'ended'
              ? <ArrowLeftToLine />
              : type === 'upcoming'
                ? <CalendarClock size={25} />
                : <Videotape />
          }
          title={
            (meeting as Call).state?.custom?.description ||
            (meeting as CallRecording).filename?.substring(0, 20) ||
            'No Description'
          }
          date={
            (meeting as Call).state?.startsAt?.toLocaleString() ||
            (meeting as CallRecording).start_time?.toLocaleString()
          }
          isPreviousMeeting={type === 'ended'}
          buttonIcon1={type === 'recordings' ? <Play /> : <SquarePlay />}
          buttonText={type === 'recordings' ? 'Play' : 'Start'}
          handleClick={
            type === 'recordings'
            ? () => router.push(`${(meeting as CallRecording).url}`)
            : () => router.push(`/meeting/${(meeting as Call).id}`)
          }
          link={
            type === 'recordings'
              ? (meeting as CallRecording).url
              : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`
          }
        />
      ))
    ) : (
      <h1 className="text-2xl font-bold">{noCallsMessage}</h1>
    )}
  </div>
  );
};

export default CallList;
