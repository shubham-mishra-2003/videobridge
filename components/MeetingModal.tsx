import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import React, { ReactNode } from "react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  buttonIcon?: ReactNode;
  handleClick?: () => void;
  image?: ReactNode;
  children?: ReactNode;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon
}: MeetingModalProps) => {
  return (
    <Modal
      className="flex justify-center items-center"
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
    >
      <div className="bg-slate-800 w-96 text-white flex flex-col justify-center items-center gap-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 p-2">
        {image &&
          <div className="w-full flex justify-center">
            {image}
          </div>}
        <h1
          className={`${className} md:text-3xl sm:text-2xl text-xl font-bold leading-[42px]`}
        >
          {title}
        </h1>
        {children}
        <Button variant="contained" className="w-full" onClick={handleClick}>
          {buttonIcon}
          &nbsp;
          {buttonText || "Schedule a meeting"}
        </Button>
      </div>
    </Modal>
  );
};

export default MeetingModal;
