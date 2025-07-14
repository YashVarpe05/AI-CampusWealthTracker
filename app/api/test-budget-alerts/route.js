import { NextResponse } from "next/server";
import { inngest } from "@/lib/inngest/client";
import { currentUser } from "@clerk/nextjs/server";

export async function POST() {
	try {
		// Allow testing without authentication for debugging
		console.log("🧪 Manual trigger: Budget alerts check started");

		// Trigger the budget alerts check function manually
		const result = await inngest.send({
			name: "Check Budget Alerts",
			data: {
				manual: true,
				timestamp: new Date().toISOString(),
			},
		});

		console.log("✅ Budget alerts trigger sent:", result);

		return NextResponse.json({
			success: true,
			message: "Budget alerts check triggered successfully",
			result,
		});
	} catch (error) {
		console.error("❌ Error triggering budget alerts:", error);
		return NextResponse.json(
			{
				success: false,
				error: error.message,
			},
			{ status: 500 }
		);
	}
}

export async function GET() {
	return NextResponse.json({
		message: "Budget Alerts Test Endpoint",
		instructions: "Send a POST request to trigger budget alerts manually",
		endpoint: "/api/test-budget-alerts",
		status: "Available for testing",
	});
}
