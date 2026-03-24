// Tells next.js that this component runs in the client browser, not on the server
"use client";

import Link from "next/link";
import { RESUME_INFO } from "@/data/resume_info"

export default function Home() {
  return (
    <main className="p-10">
      <div id="title">
      <h1 className="text-4xl font-bold">{ RESUME_INFO.name }</h1>
      <p>{ RESUME_INFO.about }</p>
      </div>
    </main>
  );
}
