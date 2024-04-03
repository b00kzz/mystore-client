"use client";

import { Session } from "next-auth";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  session: Session | null;
};

export default function Index({ session }: Props) {
  const t = useTranslations("Index");
  const locale = useLocale();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isPathName: boolean = pathName.split("th")[0] === "/";
    const isHashClientID: boolean = location.hash.includes("client_id=");
    const isSearchLiffState: boolean = location.search.includes("?liff.state=");
    const isSearchWithCode: boolean = location.search.includes("?code=");

    if (
      //from line app
      (isPathName && isHashClientID && !isSearchLiffState) ||
      //from desktop browser
      (isPathName && isSearchWithCode)
    ) {
      return router.push("/" + locale + "/home");
    } else if (isPathName && isSearchLiffState) {
      const locationLiff = location.search
        .split("?liff.state=")[1]
        .split("%2F")
        .join("/")
        .split("%3Fliff.hback")[0];
      router.push(locationLiff);
      return;
    } else {
      return router.push("/" + locale + "/home");
    }
  }, []);

  return null;
}
