"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const useHelp = () => {
  let router = useRouter();
  const pathname = usePathname();

  const pathActive = (path) => {
    // console.log(pathname, path);
    return pathname === path ? true : false;
  };
  return {
    pathActive,
  };
};

export default useHelp;
