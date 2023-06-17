import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppleFloor } from "../redux/floor/floorSlice";
import { addAppleBasket } from "../redux/basket/basketSlice";
import Apple from "./apple";

function Floor() {
  const floorList = useSelector((state) => state.floor.floorList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (floorList.length === 3) {
      addToBasketList();
    }
  }, [floorList]);

  const addToBasketList = () => {
    let currentIndex = 0;
    const dropInterval = setInterval(() => {
      currentIndex++;

      dispatch(deleteAppleFloor(0));
      dispatch(addAppleBasket({ id: currentIndex }));
      if (currentIndex === 3) {
        clearInterval(dropInterval);
      }
    }, 1000);
  };

  return (
    <div className="flex items-center space-x-10">
      {floorList.map((apple, index) => (
        <Apple key={index} id={index} />
      ))}
    </div>
  );
}

export default Floor;
