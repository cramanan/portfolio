import { transporter } from "@/utils/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST")
        return res.status(405).json({ error: "Method not allowed" });

    transporter.sendMail({
        from: process.env.MAIL_ADDRESS,
        to: process.env.MAIL_ADDRESS,
        html: "<h1>HELLO WORLD</h1>",
    });

    return res.status(200).json({ message: "Email sent successfully" });
}
