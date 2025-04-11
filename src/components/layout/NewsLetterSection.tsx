"use client";
import axios from "axios";
import clsx from "clsx";
import React, { FC, HTMLAttributes, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

type INewsLetterSectionProps = HTMLAttributes<HTMLDivElement> & {};

const NewsLetterSection: FC<INewsLetterSectionProps> = (props) => {
  const { className, ...others } = props;

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "info" | "warning",
  });

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      await axios.post("/api/post-newsletter", {
        email,
      });

      setEmail("");
      setNotification({
        open: true,
        message: "Successfully subscribed to the newsletter!",
        severity: "success",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        setNotification({
          open: true,
          message: error.response?.data?.message || "Failed to subscribe. Please try again.",
          severity: "error",
        });
      } else {
        console.error("Unexpected error:", error);
        setNotification({
          open: true,
          message: "An unexpected error occurred. Please try again later.",
          severity: "error",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={clsx(
        "bg-white rounded-2xl lg:pl-5 lg:pr-7 lg:pt-10 lg:pb-12 px-10 pb-7 pt-5 shadow-card flex flex-col lg:justify-center justify-start",
        className
      )}
      {...others}
    >
      <div className="flex-1 flex flex-col">
        <div className="text-center flex flex-col justify-center lg:mb-8 mb-6 items-center">
          <h2 className="text-h5 font-bold lg:pb-5 pb-1.5">Newsletter</h2>
          <span className="w-36 h-[1px] bg-gray-300 lg:block hidden mb-5"></span>
          <p className="text-[12px]">Join the 36,000 Lux Ventus!</p>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }} className="flex flex-col justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary-300 transition-colors text-sm placeholder:text-gray-300 placeholder:italic lg:mb-5 mb-3.5"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button
            type="submit"
            className={clsx(
              "w-full py-2.5 rounded-full transition-colors text-[12px] font-bold mb-7",
              isSubmitting 
                ? "bg-gray-300 cursor-not-allowed" 
                : "bg-primary-300 hover:bg-primary-400"
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
          
          <p className="text-[12px] text-center lg:block hidden">
            Rest assured! You&apos;re gonna have a lot of fun when you press
            this
          </p>
        </form>
      </div>
      
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NewsLetterSection;
