import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import users from "./users";

const guestbookEntries = pgTable("guestbook_entries", {
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});

export const insertGuestbookEntrySchema = createInsertSchema(
  guestbookEntries
).omit({
  userId: true,
  createdAt: true,
});

export default guestbookEntries;
