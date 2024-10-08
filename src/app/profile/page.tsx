import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

import options from "@/config/auth";

export default async function Profile() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/");
  }
  return (
    <section>
      <h1>profile</h1>
    </section>
  );
}
