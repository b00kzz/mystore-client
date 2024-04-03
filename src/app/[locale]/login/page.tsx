"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import "./style.css";
import { Button } from "@/components/ui/button";

export default function Signin() {
  const session = useSession();
  const locale = useLocale();
  const t = useTranslations("Login");
  const [error, setError] = useState<string>();
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (error) setError(undefined);

    const formData = new FormData(event.currentTarget);
    signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: true,
    }).then((result) => {
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/" + locale);
      }
    });
  }

  return (
    <>
      {session.status !== "authenticated" ? (
        <div>
          <form
            action="/api/auth/callback/credentials"
            method="post"
            onSubmit={onSubmit}
            className=" relative p-20  rounded-lg border bg-card shadow-sm "
          >
            <label className="pb-10">
              <span>{t("username")}</span>
              <Input name="username" type="text" />
            </label>
            <label className="pb-10">
              <span>{t("password")}</span>
              <Input className="" name="password" type="password" />
            </label>
            {error && <p>{t("error", { error })}</p>}
            <Button
              className=" absolute right-6 bottom-6"
              // bg-white text-black hover:bg-black ...
              type="submit"
            >
              {t("submit")}
            </Button>
          </form>
        </div>
      ) : (
        window.location.replace("/" + locale + "/home")
      )}
    </>
  );
}
