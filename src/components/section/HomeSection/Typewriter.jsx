"use client";

import { Typed } from "react-typed";
import React from "react";

const Typewriter = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">
        <Typed
          strings={[
            "Welcome to my website!",
            "Building amazing experiences.",
            "React & Next.js Developer.",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
    </div>
  );
};

export default Typewriter;
