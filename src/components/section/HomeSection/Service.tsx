import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="w-full bg-service text-white rounded-bl-[50px] rounded-br-md p-8">
      <div className="w-full text-center p-4">
        <div>
          <Link
            href={"/"}
            className="text-gray-200 text-[6rem] font-semibold font-heading"
          >
            Join Us Live
          </Link>
        </div>
      </div>

      <div className="w-full text-center p-4">
        <motion.div
          initial={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.09, y: -4 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link
            href={"/"}
            className="italic text-gray-200 underline underline-offset-2  text-[12px]"
          >
            Find a Dominion City Near You...
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
