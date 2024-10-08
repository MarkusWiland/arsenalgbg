import { Card, CardBody } from "@nextui-org/react";

import db from "@/db";

import GuestbookClient from "./page.client";

export default async function GuestBook() {
  const entries = await db.query.guestbookEntries.findMany();
  return (
    <section>
      <h1>Guestbook</h1>
      <Card className="mx-auto max-w-md">
        <CardBody>
          <h1>welcome guesbook</h1>
          <GuestbookClient />
        </CardBody>
        ¨<pre>{JSON.stringify(entries, null, 2)}</pre>
      </Card>
    </section>
  );
}
