"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";

import { insertGuestbookEntrySchema } from "@/db/schema/guestbook-entries";

import { createGuestbookEntry } from "./action";

export default function GuestbookClient() {
  const [lastResult, action] = useFormState(createGuestbookEntry, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: insertGuestbookEntrySchema });
    },

    shouldValidate: "onBlur",

    shouldRevalidate: "onInput",
  });
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
      <Textarea
        key={fields.message.key}
        name={fields.message.name}
        label="Mesage"
        placeholder="messagen teter"
        isInvalid={!fields.message.valid}
        errorMessage={fields.message.errors}
        className="w-full"
      />

      <Button type="submit">Login</Button>
    </form>
  );
}
