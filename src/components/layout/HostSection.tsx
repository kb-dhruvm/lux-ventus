import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HostSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg h-[600px] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
            alt="Mallory Reyn"
            className="w-24 h-24 rounded-full border-4 border-[#40E0D0] mb-4"
          />
          <h2 className="text-2xl font-semibold mb-1">Mallory Reyn</h2>
          <p className="text-gray-600 text-center text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <button className="bg-[#40E0D0] text-white px-8 py-2.5 rounded-full hover:bg-[#3BC9BB] transition-colors w-full">
            Let&apos;s Chat
          </button>
          <div className="flex gap-4">
            <FaFacebook className="w-5 h-5 text-gray-600 hover:text-[#40E0D0] cursor-pointer transition-colors" />
            <FaTwitter className="w-5 h-5 text-gray-600 hover:text-[#40E0D0] cursor-pointer transition-colors" />
            <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-[#40E0D0] cursor-pointer transition-colors" />
            <FaYoutube className="w-5 h-5 text-gray-600 hover:text-[#40E0D0] cursor-pointer transition-colors" />
            <FaInstagram className="w-5 h-5 text-gray-600 hover:text-[#40E0D0] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostSection;
