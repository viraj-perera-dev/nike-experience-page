"use client";

import { useState } from "react";
import ExperienceClient from "../components/experience/ExperienceClient"; // adjust path if needed
import Loader from "../components/experience/components/Loader";

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="overflow-hidden h-full">
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <ExperienceClient />
    </main>
  );
}
