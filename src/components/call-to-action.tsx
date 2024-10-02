"use client";
import HelixImage from "../assets/images/helix2.png";
import EmojiImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { submitEmail as submitEmailAction } from "@/app/actions";
import { useFormStatus, useFormState } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "./alert";

export const CallToAction = ({referrer}: {referrer?: string}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, formAction] = useFormState(
    submitEmailAction.bind(null, referrer),
    { message: "" }
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24"
      ref={containerRef}
      id="get-early-access"
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiImage}
            alt="emoji"
            className="absolute -top-[120px] right-[calc(100%+30px)]"
          />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get Early Access
        </h2>
        <p className="text-xl text-white/70  mt-5">
          Join our waitlist and get <strong>free early access</strong> to our
          platform as soon as we launch. Offer lasts until public release!
        </p>
        {state?.error === true && (
            <Alert variant="error" className="mt-10">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
          {state?.error === false && (
            <Alert variant="success" className="mt-10">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
        <form
          className="mt-10 flex flex-col gap-2.5 mx-auto sm:flex-row"
          action={formAction}
        >
          <input
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 focus:ring-1 ring-purple-400 outline-none"
            required
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-white text-black h-12 rounded-lg px-5 disabled:cursor-not-allowed disabled:bg-gray-300"
      disabled={pending}
    >
      Submit
    </button>
  );
}
