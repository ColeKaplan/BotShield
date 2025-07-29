"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Defenses = () => {
  const router = useRouter();
  
  return (
    <a
      className="text-accent1 hover:underline hover:text-accent1/60"
      onClick={() => {
        router.push("/defenses");
      }}
    >
      Defenses
    </a>
  );
};

export default Defenses;
