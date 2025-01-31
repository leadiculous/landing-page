import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ProductShowcase } from "@/components/product-showcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/pricing-demo";
import { headers } from "next/headers";
import { Alert } from "@/components/alert";

export default function Home() {
  const headersList = headers();
  const referrer = headersList.get('referer')?.toString();

  return (
    <>
      <div className="overflow-x-hidden">
      <a href="https://github.com/leadiculous/app/discussions/1" className="underline">
        <Alert variant="error" className="bg-red-600 text-white text-center">
          <strong>Project discontinued. Click here for more information.</strong>
        </Alert>
      </a>
        {/* <Banner /> */}
        <Navbar />
        <Hero />
        <Features />
        <ProductShowcase />
        <Pricing />
        <FAQs />
        {/* <CallToAction referrer={referrer} /> */}
      </div>
      <Footer />
    </>
  );
}
