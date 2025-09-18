"use client";

import { isLunchTime } from "@/lib/data";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const GoToTheRightMenu = () => {
  const showLunchMenu = isLunchTime();
  const HIDE_LUNCH_MENU = process.env.NEXT_PUBLIC_HIDE_LUNCH_MENU === "true";
  useEffect(() => {
    if (showLunchMenu && !HIDE_LUNCH_MENU) {
      // TODO: HIDE_LUNCH_MENU
      // redirect("/lunch-menu");

      redirect("/main-menu");
    } else {
      redirect("/main-menu");
    }
  }, [showLunchMenu]);

  return <></>;
};

export default GoToTheRightMenu;
