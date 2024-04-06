"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowBigDownDash,
  ArrowBigLeftDash,
  SquareUser,
  User,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {};

export default function CardMenu({}: Props) {
  const t = useTranslations("Menu");
  return (
    <Card>
      {/* <CardHeader>
      <span>{t(title)}</span>
      <CardHeader/>
         */}
      {/* <CardDescription></CardDescription> */}
      <CardContent className="p-6">
        <div className="grid gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-card-foreground rounded-sm text-center relative ">
            {/* <SquareUser className="w-10 h-10"/> */}
            <div className="flex items-center justify-center">
              <Image
                className="hover:scale-125 transition delay-150 fix-img "
                alt="key"
                src={"/mlikfesh.png"}
                width={100}
                height={100}
              />
            </div>
            <CardContent className="font-bold text-white">
              {t("menuone")}
            </CardContent>
          </div>
          <div className="bg-card-foreground rounded-sm text-center relative">
            <div className="flex items-center justify-center">
              <Image
                className="fix-img hover:scale-125 transition delay-150   ml-4"
                alt="key"
                src={"/fuit.png"}
                width={100}
                height={100}
              />
            </div>

            <CardContent className="font-bold text-white">
              {t("menutwo")}
            </CardContent>
          </div>
          <div className="bg-card-foreground rounded-sm text-center relative">
            <div className="flex items-center justify-center">
              <Image
                className="pb-6 hover:scale-125 transition delay-150 fix-img"
                alt="key"
                src={"/promotion.png"}
                width={100}
                height={70}
              />
            </div>

            <CardContent className="text-white font-bold">
              {t("menuthree")}
            </CardContent>
          </div>
          <div className="bg-card-foreground rounded-sm text-center relative">
            <div className="flex justify-center items-center">
              <Image
                className=" hover:scale-125 transition delay-150 fix-img"
                alt="key"
                src={"/topping.png"}
                width={100}
                height={100}
              />
            </div>
            <CardContent className="text-white font-bold">
              {t("menufour")}
            </CardContent>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
