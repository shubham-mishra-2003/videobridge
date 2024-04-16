"use client";
import { useEffect, useState } from "react";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks
} from "@stream-io/video-react-sdk";

import Alert from "./Alert";
import { Button } from "@mui/material";
import { PhoneOff } from "lucide-react";

const MeetingSetup = ({
  setIsSetupComplete
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  const callEndedAt = useCallEndedAt();
  const callTimeNotArrived =
    callStartsAt && new Date(callStartsAt) > new Date();
  const callHasEnded = !!callEndedAt;

  const call = useCall();

  if (!call) {
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );
  }

  const [isMicCamOn, setIsMicCamOn] = useState(false);

  useEffect(
    () => {
      if (isMicCamOn) {
        call.camera.disable();
        call.microphone.disable();
      } else {
        call.camera.enable();
        call.microphone.enable();
      }
    },
    [isMicCamOn, call.camera, call.microphone]
  );

  if (callTimeNotArrived)
    return (
      <Alert
        title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
      />
    );

  if (callHasEnded)
    return (
      <Alert
        title="The call has been ended by the host"
        icon = {<PhoneOff/>}
      />
    );

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamOn}
            onChange={e => setIsMicCamOn(e.target.checked)}
          />
          Join without mic and camera
        </label>
        <DeviceSettings />
      </div>
      <Button
        variant="contained"
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
