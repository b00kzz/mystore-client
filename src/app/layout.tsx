import AuthProvider from "@/components/AuthProvider";
import { ReactNode } from "react";
import { Metadata } from "next";
import "@/styles/globals.css";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Cha kai mook",
};

export default function RootLayout({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
