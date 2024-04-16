import MeetingType from "@/components/MeetingType";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <div className="flex size-full flex-col gap-10">
      <div className="h-[250px] md:p-4 w-full rounded-[20px] bg-hero flex bg-cover">
        <div className="flex text-white h-full flex-col justify-between max-md:px-5 max-md:py-8">
          <h2 className="glassmorphism rounded-md p-2 text-center w-fit">
            Beyond Screens, within Reach 😊
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-100">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingType />
    </div>
  );
};

export default Home;
