"use client";

import ThemeProvider from "@/components/ThemeProvider";
import { MaterialTailwindControllerProvider } from "@/context";
import theme from "@/theme";
import { Roboto } from "next/font/google";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import InnerContent from "./content";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import "react-calendar/dist/Calendar.css";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  const [isClient, setIsClient] = useState(false);
  const isLogin = router.startsWith("/login");
  const forgetpassword = router.startsWith("/forget-password");
  const sendOtp = router.startsWith("/send-otp");
  const resetPassword = router.startsWith("/reset-password");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        />
        <link rel="icon" type="image/svg+xml" href="/img/favicon.png" />
        <title>Wellness Admin Portal</title>
      </head>
      <body className={roboto.className}>
        {isClient == true && (
          <ThemeProvider value={theme}>
            <ToastContainer />
            <QueryClientProvider client={queryClient}>
              <MaterialTailwindControllerProvider>
                {isLogin || forgetpassword || sendOtp || resetPassword ? (
                  children
                ) : (
                  <InnerContent>{children}</InnerContent>
                )}
              </MaterialTailwindControllerProvider>
            </QueryClientProvider>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
