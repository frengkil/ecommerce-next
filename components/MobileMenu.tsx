"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import SideBar from "./SideBar";

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <SideBar
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
