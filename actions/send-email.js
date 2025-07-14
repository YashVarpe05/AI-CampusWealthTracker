import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
	console.log("📧 Sending email to:", to);
	console.log("📧 Subject:", subject);

	const resend = new Resend(process.env.RESEND_API_KEY || "");

	try {
		const data = await resend.emails.send({
			from: "Campus Wealth Tracker <onboarding@resend.dev>",
			to,
			subject,
			react,
		});

		console.log("✅ Email sent successfully:", data);
		return { success: true, data };
	} catch (error) {
		console.error("❌ Error sending email:", error);
		return { success: false, error };
	}
}
