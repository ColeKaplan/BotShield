"use client";
import React from "react";
import { useRouter } from "next/navigation";

const References = () => {
  const router = useRouter();
  return (
    <a
      className="text-accent1 hover:underline hover:text-accent1/60"
      onClick={() => {
        router.push("/");
      }}
    >
      References
    </a>
  );
};

export default References;
