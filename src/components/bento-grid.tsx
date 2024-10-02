"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { RedditCard } from "./reddit-card";
import { DM } from "./DM";
import Image from "next/image";
import { cn } from "./lib/utils";

const logos = ["/reddit-logo.svg", "/favicon-32x32.png", "/twitter-x-logo.svg"];

const lineWidth = 80;
const lineHeight = 2;

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        <div className="bg-[#000] border border-white/30  rounded-2xl flex items-center justify-center size-14 p-3">
          <Image src={logos[0]} width={100} height={100} alt="Reddit logo" />
        </div>
        <div
          className="relative"
          style={{
            width: `${lineWidth}px`,
            height: `${lineHeight}px`,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: "-40px" }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center size-16 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <Image src={logos[1]} width={100} height={100} alt="Leadiculous logo" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div
          className="relative"
          style={{
            width: `${lineWidth}px`,
            height: `${lineHeight}px`,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: "40px" }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="bg-black border border-white/30 rounded-2xl flex items-center justify-center size-14">
          <Image src={logos[2]} width={100} height={100} alt="Twitter / X logo" />
        </div>
      </div>
    </div>
  );
};

const data = [50, 40, 300, 320, 500, 350, 450, 560, 500];
const maxData = Math.max(...data);
const chartHeight = 400;
const chartWidth = 800;

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] flex-1 rounded-xl border border-white/30 p-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#5D2CA8",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10, // Ensure the effect is on top
            willChange: "transform, top, left",
            opacity: 0.4,
          }}
        />
      )}
      {children}
    </div>
  );
};

const AIDMS = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col xl:flex-row gap-8 justify-center h-full items-start relative">
        <RedditCard username="PurpleLover" subreddit="r/LeadGeneration">
          Does anyone know a good and <strong> affordable lead finder</strong>{" "}
          platform? None of the solutions I{"'"}ve tried so far have been able
          to deliver the results I need.
        </RedditCard>
        <ArrowRight className="hidden xl:block size-20 text-white/70 self-center -m-8" />
        <ArrowDown className="block xl:hidden size-5 text-white/70 self-center -m-8" />
        <DM>
          Hello <strong>u/PurpleLover</strong>, I saw your post on{" "}
          <strong>r/LeadGeneration</strong> regarding an{" "}
          <strong>affordable lead finder</strong> and I wanted to reach out to
          you. We have a solution that can help you find leads in seconds. Would
          you like to know more?
        </DM>
      </div>

      <div className="text-left p-6 mt-4">
        <h1 className="text-white text-2xl font-bold mb-2">Personalized DMs</h1>
        <p className="text-gray-400 text-lg">
          Craft the perfect message with the <strong>power of AI</strong> to
          reach out to your customers.
        </p>
      </div>
    </div>
  );
};

export const BentoBox1 = ({className}: {className?: string}) => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    const currentChartRef = chartRef.current;

    if (currentChartRef) {
      observer.observe(currentChartRef);
    }


    return () => {
      if (currentChartRef) {
        observer.unobserve(currentChartRef);
      }
    };
  }, [chartRef]);

  return (
    <div className={cn("bg-[#000000] flex justify-center items-center rounded-lg", className)}>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl">
        <CardWithEffect>
          <div className="flex flex-col justify-between h-full">
            <div className="mb-4 px-6 mt-6">
              <div className="flex justify-between items-center mb-6 pb-2">
                <h2 className="text-white/70 text-xl">Sales</h2>
                <div className="flex items-center">
                  <div className="h-1 bg-black w-8 rounded-lg"></div>
                  <span className="ml-2 text-white/70 text-sm">Growth</span>
                </div>
              </div>
              <div
                ref={chartRef}
                className="relative w-full mt-12"
                style={{ height: chartHeight }}
              >
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="w-full h-full pl-11"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#5D2CA8" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="url(#gradient)"
                    stroke="none"
                    points={`${
                      (0 / (data.length - 1)) * chartWidth
                    },${chartHeight} ${data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${
                            chartHeight - (value / maxData) * chartHeight
                          }`
                      )
                      .join(" ")} ${
                      (data.length - 1) * (chartWidth / (data.length - 1))
                    },${chartHeight}`}
                  />
                  <motion.polyline
                    fill="none"
                    stroke="#5D2CA8"
                    strokeWidth="3"
                    className=""
                    points={data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${
                            chartHeight - (value / maxData) * chartHeight
                          }`
                      )
                      .join(" ")}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isChartVisible ? 1 : 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
                  {Array.from(Array(7).keys()).map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 w-full flex items-center text-white/30 text-sm"
                      style={{ bottom: `${(100 / 6) * i}%` }}
                    >
                      <span className="mr-4">{`${10 + i * 10}%`}</span>
                      <div className="w-full border-t border-white/70"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-left p-6 mt-4">
              <h1 className="text-white text-2xl font-bold mb-2">
                Proven effectiveness
              </h1>

              {[
                "5x more effective than cold DM",
                "10x higher chance of opened DM",
                "Hundreds of hours saved each month",
              ].map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Check className="size-5" />
                  <p className="text-white/70 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </CardWithEffect>
        <div className="flex flex-col w-full md:w-1/2 gap-5 h-full]">
          <CardWithEffect>
            <div className="flex flex-col justify-center h-full">
              <LogoBeam />
              <div className="text-left p-6">
                <h1 className="text-white text-2xl font-bold mb-2">
                  Monitor social media
                </h1>
                <p className="text-white/70 text-lg">
                  Using our <strong>in-house AI</strong> solution, we monitor
                  multiple social media sources and provide you with matching
                  leads for your campaign.
                </p>
              </div>
            </div>
          </CardWithEffect>
          <CardWithEffect>
            <AIDMS />
          </CardWithEffect>
        </div>
      </div>
    </div>
  );
};
