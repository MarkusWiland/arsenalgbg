"use server";

// action.ts
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { parseWithZod } from "@conform-to/zod";

import db from "@/db";
import guestbookEntries, {
  insertGuestbookEntrySchema,
} from "@/db/schema/guestbook-entries";

export async function createGuestbookEntry(
  prevState: unknown,
  formData: FormData
) {
  const submission = parseWithZod(formData, {
    schema: insertGuestbookEntrySchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.insert(guestbookEntries).values({
    userId: "hej",
    message: submission.value.message,
  });

  revalidatePath("/Guestbook");
  redirect("/Guestbook");
}
