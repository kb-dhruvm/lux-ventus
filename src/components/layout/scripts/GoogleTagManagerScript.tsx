import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const GoogleTagManagerScript = () => {

  if (!process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID) {
    return null
  }

  return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />;
};

export default GoogleTagManagerScript;
