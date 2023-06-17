import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppleFloor } from "../redux/floor/floorSlice";
import { deleteAppleTree, updateAppleOnFloor } from "../redux/tree/treeSlice";
import Apple from "./apple";

export default function Tree() {
  const treeRef = useRef(null);
  const treeList = useSelector((state) => state.tree.treeList);
  const dispatch = useDispatch();

  const shakeTree = () => {
    treeRef.current.classList.add("tree-shake");
    const shakeTimeout = setTimeout(() => {
      dropTheApples();
    }, 3000);

    return () => clearTimeout(shakeTimeout);
  };

  useEffect(() => {
    const animationEnd = window.addEventListener(
      "animationend",
      function (event) {
        if (event.animationName !== "shake-animation") {
          dispatch(deleteAppleTree(0));
        }
      }
    );

    return () => window.removeEventListener("animationend", animationEnd);
  }, []);

  const dropTheApples = () => {
    let currentIndex = 0;
    const dropInterval = setInterval(() => {
      if (currentIndex < 3) {
        dispatch(updateAppleOnFloor({ id: currentIndex, onFloor: true }));
      }

      dispatch(addAppleFloor({ id: currentIndex }));
      currentIndex++;
      if (currentIndex === 3) {
        clearInterval(dropInterval);
      }
    }, 750);
  };

  return (
    <div className="relative" ref={treeRef}>
      <img
        onClick={shakeTree}
        src="/images/tree.svg"
        alt="Tree"
        id="apple-tree"
        className="absolute"
      />
      <div className="flex items-center space-x-10 absolute left-[9rem] top-[12rem] ">
        {treeList.map((apple, index) => (
          <Apple key={index} id={index} onFloor={apple.onFloor} />
        ))}
      </div>
    </div>
  );
}
