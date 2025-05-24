import { useState } from "react";
import clsx from "clsx";

const bgColor = [
  {
    name: "yellow",
    value: "bg-yellow-800",
  },
  {
    name: "red",
    value: "bg-red-800",
  },
  {
    name: "green",
    value: "bg-green-800",
  },
  {
    name: "blue",
    value: "bg-blue-800",
  },
];

const CircleColor = ({ currentColor, setCurrentColor }) => {
  return (
    <>
      <div className="flex gap-2 ">
        {bgColor.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              if (currentColor === color.value) {
                setCurrentColor("");
              } else {
                setCurrentColor(color.value);
              }
            }}
          >
            <span
              className={clsx(
                `w-5 h-5 inline-block hover:opacity-100 hover:scale-105 hover:-translate-y-1 transition-all duration-300  rounded-full cursor-pointer  ${color.value} opacity-50`,
                currentColor === color.value &&
                  "ring-2 ring-gray-500 opacity-100  ring-offset-1"
              )}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CircleColor;
