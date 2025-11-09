import { Resend } from "resend";
import ContactEmail from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";



export const sendContactEmail = async (
    userEmail: string,
    name: string,
    message: string
) => {
    const baseUrl = `${domain}`;
    await resend.emails.send({
        from: "updates@smartresource.ai",
        to: process.env.ADMIN_EMAIL!,
        subject: `New message from ${name}`,
        react: ContactEmail({
            name: name,
            userEmail: userEmail,
            message: message,
            baseUrl: baseUrl,
        }),
    });
};
