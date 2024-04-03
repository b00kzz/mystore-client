import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const t = useTranslations("NavBar");

  const route = [
    {
      name: t("home"),
      path: "home",
    },
    {
      name: t("products"),
      path: "product",
    },
    {
      name: t("tea-custom"),
      path: "product/custom",
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {route.map((item, idx) => (
        <Link
          key={idx}
          href={`/${item.path}`}
          className={cn(
            pathName.includes(item.path)
              ? "text-sm font-medium transition-colors text-primary"
              : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
