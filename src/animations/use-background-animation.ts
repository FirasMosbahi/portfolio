import { AnimationControls, useAnimationControls } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function backgroundAnimation(
  leftCodeLinesControl: AnimationControls,
  rightCodeLinesControl: AnimationControls
) {
  async function animateLeft(isOdd: boolean) {
    if (isOdd) {
      await leftCodeLinesControl.start(
        { y: "-70vh", x: "-65vh" },
        { duration: 0.3 }
      );
      leftCodeLinesControl.set({ y: "59vh" });
      await leftCodeLinesControl.start(
        { y: "45vh", x: "-65vh" },
        { duration: 0.3 }
      );
    } else {
      await leftCodeLinesControl.start(
        { y: "-52vh", x: "-65vh" },
        { duration: 0.6 }
      );
    }
  }
  async function animateRight(isOdd: boolean) {
    if (isOdd) {
      await rightCodeLinesControl.start(
        { y: "-45vh", x: "160vh" },
        { duration: 0.6 }
      );
    } else {
      await rightCodeLinesControl.start(
        { y: "-70vh", x: "160vh" },
        { duration: 0.3 }
      );
      rightCodeLinesControl.set({ y: "59vh" });
      await rightCodeLinesControl.start(
        { y: "45vh", x: "160vh" },
        { duration: 0.3 }
      );
    }
  }

  function animation(isOdd: boolean) {
    animateLeft(isOdd);
    animateRight(isOdd);
  }

  return {
    callback: animation,
    left: { y: "-52vh", x: "-65vh" },
    right: { y: "47vh", x: "160vh" },
  };
}
