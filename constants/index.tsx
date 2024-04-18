import {
  ArrowLeftToLine,
  BookPlus,
  CalendarClock,
  Home,
  Videotape
} from "lucide-react";
import { title } from "process";

export const sidebarData = [
  {
    label: "Home",
    title:"Home",
    route: "/",
    img: <Home />
  },
  {
    label: "Upcoming",
    title:"Upcoming",
    route: "/upcomings",
    img: <CalendarClock />
  },
  {
    label: "Previous",
    route: "/previous",
    img: <ArrowLeftToLine />,
    title: "Previous"
  },
  {
    label: "Recordings",
    route: "/recordings",
    title: "Recordings",
    img: <Videotape />
  },
  {
    label: "Personal Room",
    title: "Personal Room",
    route: "/personal",
    img: <BookPlus />
  }
];

export const avatarImages = [
  "/avatar/boy(1).png",
  "/avatar/boy(2).png",
  "/avatar/avatar.png",
  "/avatar/boy.png",
  "/avatar/girl.png"
];