import React from "react";
import cn from "../helpers/cn";

export default function Apple({ classNames, onFloor, id }) {
  return (
    <img
      id={id}
      src="/images/apple.svg"
      alt="Apple"
      className={cn(
        classNames && classNames,
        "w-28 z-20",
        onFloor ? "fall-apple" : ""
      )}
    />
  );
}
