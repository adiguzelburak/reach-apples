import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppleFloor } from "../redux/floor/floorSlice";
import { deleteAppleTree, updateAppleOnFloor } from "../redux/tree/treeSlice";
import Apple from "./apple";
import cn from "../helpers/cn";

export default function Tree() {
  const treeRef = useRef(null);
  const treeList = useSelector((state) => state.tree.treeList);
  const basketList = useSelector((state) => state.basket.basketList);
  const dispatch = useDispatch();
  const [isTreeShaked, setIsTreeShaked] = useState(false);

  const claimAgain = basketList.length === 3;

  const shakeTree = () => {
    if (isTreeShaked) return;

    setIsTreeShaked(true);
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

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <button
        disabled={isTreeShaked && !claimAgain}
        onClick={claimAgain ? reloadPage : shakeTree}
        className={cn(
          isTreeShaked && !claimAgain ? "cursor-not-allowed" : "cursor-pointer",
          "bg-green-500 text-green-200 px-6 py-1.5 rounded-xl hover:bg-green-800 transition-colors duration-300"
        )}
      >
        {claimAgain ? (
          <div className="flex items-center space-x-5">
            <div>Reload</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        ) : (
          "Claim the apples"
        )}
      </button>

      <div className="relative" ref={treeRef}>
        <img
          onClick={shakeTree}
          src="/images/tree.svg"
          alt="Tree"
          id="apple-tree"
          className={cn(
            isTreeShaked ? "cursor-not-allowed" : "cursor-pointer",
            "absolute"
          )}
        />
        <div className="flex items-center space-x-10 absolute left-[9rem] top-[12rem] ">
          {treeList.map((apple, index) => (
            <Apple key={index} id={index} onFloor={apple.onFloor} />
          ))}
        </div>
      </div>
    </div>
  );
}
