import React from "react";
import { useSelector } from "react-redux";
import Apple from "./apple";

export default function Basket() {
  const basketList = useSelector((state) => state.basket.basketList);
  return (
    <div className="relative z-40">
      <img src="/images/basket.svg" alt="Apple" className="w-[400px] z-20" />
      <div className="absolute top-[101px] left-[-10px] w-full h-full flex justify-center items-start">
        {basketList.map((apple, index) => (
          <Apple key={index} classNames="w-[5rem]" />
        ))}
      </div>
    </div>
  );
}
