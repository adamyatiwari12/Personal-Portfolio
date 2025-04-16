import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto px-0 py-10 flex justify-between items-center">
        <span>© 2025 Adamya. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="https://leetcode.com/u/adamya_tiwari/" className="hover:text-gray-300 transition-colors">LeetCode</Link>
          <Link href="https://codeforces.com/profile/adamya_tiwari" className="hover:text-gray-300 transition-colors">CodeForces</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;