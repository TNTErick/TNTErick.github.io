"use client";

import dynamic from "next/dynamic";

const ConstructionCanvas = dynamic(() => import("./Construction"), { ssr: false });

export default function ConstructionWrapper() {
  return <ConstructionCanvas />;
}
