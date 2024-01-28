"use client";

import React, { useEffect } from "react";
import { CodeLines } from "@portfolio/components/icons";
import { motion, useAnimation } from "framer-motion";
import { backgroundAnimation } from "@portfolio/animations/use-background-animation";
import useCustomNavigation, {
  NavigationAction,
} from "@portfolio/hooks/use-custom-navigation";
import { usePathname } from "next/navigation";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const navigation = useCustomNavigation();
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const backgroundAnumation = backgroundAnimation(
    leftAnimation,
    rightAnimation
  );

  const path = usePathname();

  useEffect(() => {
    let isOdd: boolean = true;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key in ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"])
        backgroundAnumation.callback(isOdd);
      isOdd = !isOdd;
    };

    const handleWheel = (event: MouseEvent) => {
      backgroundAnumation.callback(isOdd);
      isOdd = !isOdd;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="bg-backgroundBlack w-screen h-screen relative overflow-hidden">
      <motion.div
        animate={leftAnimation}
        initial={backgroundAnumation.left}
        className="absolute blur-sm "
      >
        <CodeLines width={800} className="rotate-180" />
      </motion.div>
      <motion.div
        className="absolute blur-sm"
        initial={backgroundAnumation.right}
        animate={rightAnimation}
      >
        <CodeLines width={800} />
      </motion.div>
      <div className="flex justify-center items-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
