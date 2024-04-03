import { getServerSession } from "next-auth";

import Index from "./Index";
import { authOptions } from "@/util/auth";
import { icons } from "lucide-react";

export const metadata = {
  title: "Cha kai mook",
}

export default async function IndexPage() {
  const session = await getServerSession(authOptions);
  return <Index session={session} />;
}
