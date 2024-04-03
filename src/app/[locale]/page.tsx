import { getServerSession } from "next-auth";
import Index from "./Index";
import { authOptions } from "@/util/auth";


export default async function IndexPage() {
  const session = await getServerSession(authOptions);
  return <Index session={session} />;
}
