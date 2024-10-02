"use client";
import appScreen from "../../public/screenshot.png"; // "../assets/images/product.avif";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24" id="showcase">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Intuitive design
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 text-center mt-5 ">
            Say goodbye to clunky interfaces. Our platform is designed with
            ease of use in mind.
          </p>
        </div>
        <div className="flex justify-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={appScreen}
              ref={appImage}
              alt="app screen"
              className="mt-14"
            />
          <p className="italic text-center text-sm font-semibold mt-2">
            * The screenshot above is subject to change as we continue to build and prepare for launch.
          </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
