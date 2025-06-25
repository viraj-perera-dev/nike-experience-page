// src/components/ExperienceClient.jsx
"use client";

import dynamic from "next/dynamic";

// This disables SSR for React Three Fiber (WebGL doesn't run on server)
const ModelCanvas = dynamic(() => import("./ModelCanvas"), { ssr: false });

export default function ExperienceClient() {
  return (
      <ModelCanvas />
  );
}
