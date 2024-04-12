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
