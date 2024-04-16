import {
  ArrowLeftToLine,
  BookPlus,
  CalendarClock,
  Home,
  Videotape
} from "lucide-react";

export const sidebarData = [
  {
    label: "Home",
    route: "/",
    img: <Home />
  },
  {
    label: "Upcoming",
    route: "/upcomings",
    img: <CalendarClock />
  },
  {
    label: "Previous",
    route: "/previous",
    img: <ArrowLeftToLine />
  },
  {
    label: "Recordings",
    route: "/recordings",
    img: <Videotape />
  },
  {
    label: "Personal Room",
    route: "/personal",
    img: <BookPlus />
  }
];

export const avatarImages = [
  "/images/boy(1).png",
  "/images/boy(2).png",
  "/images/avatar.png",
  "/images/boy.png",
  "/images/girl.png"
];