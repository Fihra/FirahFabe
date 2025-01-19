import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import data from "./data.json";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Divider } from "@mui/material";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FirahFabe",
  description: "FirahFabe Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
        <Navbar/>
        <Divider sx={{borderColor: data.colorStyles.lightGreen}}/>
        {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
