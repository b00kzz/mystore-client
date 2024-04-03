"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const handleChangeLangue = (lang: string) => {
    if (locale === "en") {
      router.push(`/${lang}${pathname}`);
    } else {
      const pathLang = pathname.split(locale).join(lang);
      router.push(pathLang);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          {locale === "en" ? (
            <div className="flex items-center">
              <span className="bg-transparent">
                <Image
                  src={"/Flag_of_the_United_States.svg"}
                  alt={"EN"}
                  width={50}
                  height={50}
                />
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <span className="bg-transparent">
                <Image
                  src={"/Flag_of_Thailand.svg"}
                  alt={"EN"}
                  width={50}
                  height={30}
                />
              </span>
            </div>
          )}
          <span className="sr-only">Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLangue("th")}>
          <Image
            src={"/Flag_of_Thailand.svg"}
            alt={"EN"}
            width={30}
            height={10}
          />
          <span className="ml-1 font-bold">TH</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLangue("en")}>
          <Image
            src={"/Flag_of_the_United_States.svg"}
            alt={"EN"}
            width={30}
            height={30}
          />
          <span className="ml-1 font-bold">EN</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
