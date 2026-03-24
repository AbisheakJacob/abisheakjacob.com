// Tells next.js that this component runs in the client browser, not on the server
"use client";

import Link from "next/link";
import { Section }  from "@/components/ui/section";
import { RESUME_INFO } from "@/data/resume_info";


export default function Home() {

  return (

    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <div>
        <section id="top" className="mx-auto w-full max-w-4xl space-y-8 bg-white print:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{ RESUME_INFO.name }</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">{ RESUME_INFO.about }</p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                <h1 className="text-2xl font-bold">{ RESUME_INFO.name }</h1>
                <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">{ RESUME_INFO.about }</p>
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                <h1 className="text-2xl font-bold">{ RESUME_INFO.name }</h1>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{ RESUME_INFO.name }</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}