"use server";

import { sendContactEmail } from "@/lib/mail";

export const sendEmailToAdmin = async (formData: FormData) => {
  const userEmail = formData.get("userEmail") as string;
  const name = `${formData.get("first-name")} ${formData.get("last-name")}`;
  const message = formData.get("message") as string;

  if (!userEmail || !name || !message) {
    throw new Error("Please fill out all the fields");
  }
  await sendContactEmail(userEmail, name, message);

  return { success: true };
};
