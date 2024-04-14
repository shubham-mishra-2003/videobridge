"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import HomeCard from './HomeCard';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import {toast} from 'react-hot-toast';
import Loader from './Loader';
import { Textarea } from './ui/textarea';
import ReactDatePicker from 'react-datepicker';
import { Input } from './ui/input';
import {
  Calendar,
  CalendarCheck,
  Copy,
  PlusSquare,
  UserRoundPlus,
  Video
} from "lucide-react";
import MeetingModal from "./MeetingModal";

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingType = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast.error("Please select a date and time");
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast.success("Meeting Created");
    } catch (error) {
      toast.error("Failed to create the meeting");
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-col-4">
    <HomeCard
      className="bg-orange-400 hover:bg-orange-500"
      title="New Meeting"
      description="Start instant meeting"
      img={<PlusSquare size={48} />}
      handleClick={() => setMeetingState("isInstantMeeting")}
    />
    <HomeCard
      className="bg-blue-500 hover:bg-blue-600"
      title="Join Meeting"
      description="Join meeting via link"
      img={<UserRoundPlus size={48} />}
      handleClick={() => setMeetingState("isJoiningMeeting")}
    />
    <HomeCard
      className="bg-teal-500 hover:bg-teal-600"
      title="Schedule Meeting"
      description="Plan a meeting"
      img={<Calendar size={48} />}
      handleClick={() => setMeetingState("isScheduleMeeting")}
    />
    <HomeCard
      className="bg-cyan-500 hover:bg-cyan-600"
      title="View Recordings"
      description="Check your recordings"
      img={<Video size={48} />}
      handleClick={() => router.push("./recordings")}
    />

      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-slate-800 text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-300" placeholder='Meeting...'
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="h:mm a"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MM dd, yyyy h:mm a"
              className="w-full rounded bg-slate-800 text-white p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success("Link Copied");
          }}
          image={<CalendarCheck size={72} className='text-blue-500' />}
          buttonIcon={<Copy size={20} />}
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Enter the joining link"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-slate-800 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </div>
  );
};

export default MeetingType;
