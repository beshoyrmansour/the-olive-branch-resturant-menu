"use client";

import { isLunchTime } from "@/lib/data";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const GoToTheRightMenu = () => {
  const showLunchMenu = isLunchTime();
  useEffect(() => {
    if (showLunchMenu) {
      redirect("/lunch-menu");
    } else {
      redirect("/main-menu");
    }
  }, [showLunchMenu]);

  return <></>;
};

export default GoToTheRightMenu;
