import React from "react";
import dynamic from "next/dynamic";

const OSMMap = dynamic(
  () => import("@/components/section/ContactSection/OSMMap"),
  { ssr: false }
);

export default function MapView() {
  return (
    <>
      <OSMMap />
    </>
  );
}
