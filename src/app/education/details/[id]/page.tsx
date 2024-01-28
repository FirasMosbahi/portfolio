"use client";

import React, { EffectCallback, useEffect } from "react";
import EducationDetailsElement from "@portfolio/app/education/details/[id]/education-details-element";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import useCustomNavigation from "@portfolio/hooks/use-custom-navigation";
import { useParams } from "next/navigation";
import { EDUCATION_DETAILS } from "@portfolio/content/education";

export default function EducationDetails(): React.ReactElement {
  useCustomNavigation();
  const params = useParams();
  const content =
    EDUCATION_DETAILS[
      Number.parseInt(
        typeof params.id === "string" ? params.id : params.id[0]
      ) - 1
    ];
  const animation = useAnimation();
  useEffect(() => {
    async function start() {
      await animation.start({ x: 0, opacity: 1 }, { duration: 0.7 });
    }
    async function destroy() {
      await animation.start({ x: -300, opacity: 0 }, { duration: 0.7 });
    }
    start();
  }, []);
  return (
    <motion.div initial={{ x: 300, opacity: 0 }} animate={animation}>
      <EducationDetailsElement {...content} />
    </motion.div>
  );
}
