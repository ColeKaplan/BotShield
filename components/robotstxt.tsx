"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RobotsTxt = () => {
  const router = useRouter();
  
  return (
    <a
      className="text-accent1 hover:underline hover:text-accent1/60"
      onClick={() => {
        router.push("/robots");
      }}
    >
      Robots.txt
    </a>
  );
};

export default RobotsTxt;
