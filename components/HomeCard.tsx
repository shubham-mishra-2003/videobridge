import React from "react";

interface HomeCardProps {
  className: string;
  img: React.ReactNode;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick
}: HomeCardProps) => {
  return (
    <div
      onClick={handleClick}
      className={`${className} px-4 py-6 flex flex-col justify-between xl:max-w-[270px] min-h-[210px] rounded-2xl cursor-pointer`}
    >
      {img}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">
          {title}
        </h1>
        <p className="text-lg font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
