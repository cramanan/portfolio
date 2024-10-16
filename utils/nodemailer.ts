import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_ADDRESS,
        pass: process.env.SMTP_PASSWORD,
    },
} as SMTPTransport.Options);
