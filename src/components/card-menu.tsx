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
          <Button className="h-28">
            {/* <SquareUser className="w-10 h-10"/> */}
            <Image
              className="hover:scale-125 fix-img"
              alt="key"
              src={"/mlikfesh.png"}
              width={100}
              height={100}
            />
            <CardContent className="font-bold ">{t("menuone")}</CardContent>
          </Button>
          <Button className="h-28">
            <Image
              className="hover:scale-125 fix-img "
              alt="key"
              src={"/fuit.png"}
              width={80}
              height={80}
            />
            <CardContent>{t("menutwo")}</CardContent>
          </Button>
          <Button className="h-28">
            <Image
              className="pb-6 hover:scale-125 fix-img"
              alt="key"
              src={"/promotion.png"}
              width={100}
              height={70}
            />
            <CardContent>{t("menuthree")}</CardContent>
          </Button>
          <Button className="h-28">
            <Image
              className=" hover:scale-125 fix-img"
              alt="key"
              src={"/topping.png"}
              width={120}
              height={100}
            />
            <CardContent>{t("menufour")}</CardContent>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
