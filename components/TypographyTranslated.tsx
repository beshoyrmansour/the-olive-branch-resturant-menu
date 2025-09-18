"use client";
import React from "react";
import { useLanguage } from "@/components/language-provider";

const TypographyTranslated = ({
  textKey,
  values,
  defaultText,
}: {
  textKey: string;
  defaultText?: string;
  values: Record<string, string>;
}) => {
  if (textKey === undefined || textKey === "") {
    return <>{defaultText}</>;
  }

  const { t } = useLanguage();
  return <>{t(textKey, values)}</>;
};

export default TypographyTranslated;
