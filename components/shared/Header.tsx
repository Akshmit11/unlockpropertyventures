"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = isHomePage
    ? {
        backgroundColor: isScrolled ? "white" : "transparent",
        borderBottom: isScrolled ? "1px solid #e5e7eb" : "none",
        position: "fixed" as const,
        top: 0,
        right: 0,
        left: 0,
      }
    : {
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        position: "static" as const,
      };

  const textStyle = {
    color: isHomePage ? (isScrolled ? "#000000" : "#ffffff") : "#000000",
  };

  const buttonStyle = {
    color: isHomePage ? (isScrolled ? "#fff" : "#000") : "#000000",
    backgroundColor: isHomePage
      ? isScrolled
        ? "black"
        : "white"
      : "transparent",
    border: isHomePage
      ? isScrolled
        ? "1px solid #000000"
        : "1px solid #ffffff"
      : "1px solid #000000",
  };

  return (
    <motion.header
      className="z-[99] transition-all duration-300 w-full"
      style={{
        ...headerStyle,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="py-4 sm:py-6 px-4 sm:px-5 max-w-7xl lg:mx-auto w-full flex items-center justify-between">
        <motion.div style={textStyle} className="text-sm sm:text-base">
          <Link href="/" className="z-[100] relative">
            Unlock Property Ventures
          </Link>
        </motion.div>
        <div>
          <SignedOut>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant={isScrolled ? "default" : "outline"}
                style={buttonStyle}
                className="text-xs sm:text-sm"
              >
                <Link href={"/sign-in"}>Login</Link>
              </Button>
            </motion.div>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
