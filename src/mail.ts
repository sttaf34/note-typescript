import { config } from "dotenv"
import { createTransport } from "nodemailer"

config()

const mailConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_SMTP_USER,
    pass: process.env.GMAIL_SMTP_PASS,
  },
}

const data = {
  from: "",
  to: "",
  subject: "件名",
  text: "本文",
}

createTransport(mailConfig).sendMail(data)
