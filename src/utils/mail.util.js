import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

async function sendMail(to, otp, sub) {
    const { data, error } = await resend.emails.send({
        from: "ExpenseTracker <noreply@uvee.me>",
        to: to,
        subject: sub,
        html: `<p>Your Verification code is: ${otp}</p>`,
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}
export {sendMail};
