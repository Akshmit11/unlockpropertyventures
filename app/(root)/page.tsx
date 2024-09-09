'use client'
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import FeaturedListings from "@/components/shared/FeaturedListings";
import Hero from "@/components/shared/Hero";
import HowItWorks from "@/components/shared/HowItWorks";
import Pricing from "@/components/shared/Pricing";
import SuccessStories from "@/components/shared/SuccessStories";
import WhyUs from "@/components/shared/WhyUs";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/home");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex-grow">
      <Hero />
      <WhyUs />
      <FeaturedListings />
      <HowItWorks />
      <SuccessStories />
      <Pricing />
    </main>
  );
}
