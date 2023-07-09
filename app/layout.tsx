import{ ReactNode,FC } from "react";
import "./globals.css";
import { Darker_Grotesque } from "next/font/google";
import { APP_NAME } from "./utils";
const darker_grotesque = Darker_Grotesque({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: APP_NAME,
  description: "Work in Progress",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`bg-white ${darker_grotesque.className}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
