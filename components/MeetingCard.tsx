"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Copy, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { ReactNode } from "react";
import { avatarImages } from "@/constants";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: ReactNode;
  isPreviousMeeting?: boolean;
  buttonIcon1?: ReactNode;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText
}: MeetingCardProps) => {
  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-slate-700 text-white px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        {icon}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">
              {title}
            </h1>
            <p className="text-base font-normal">
              {date}
            </p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) =>
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          )}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] bg-slate-200 text-black">
            +5
          </div>
        </div>
        {!isPreviousMeeting &&
          <div className="flex gap-2">
            <Button
              onClick={handleClick}
              className="rounded bg-orange-400 px-6"
            >
              {buttonIcon1}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast.success("Link copied");
              }}
              className="bg-slate-600"
            >
              <Copy height={15} />
              &nbsp; Copy Link
            </Button>
          </div>}
      </article>
    </section>
  );
};

export default MeetingCard;
