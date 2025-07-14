"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function EmailTestPage() {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(null);

	const testBudgetAlerts = async () => {
		setLoading(true);
		setResult(null);

		try {
			const response = await fetch("/api/test-budget-alerts", {
				method: "POST",
			});

			const data = await response.json();
			setResult(data);
		} catch (error) {
			setResult({
				success: false,
				error: error.message,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mx-auto p-6 max-w-2xl">
			<Card>
				<CardHeader>
					<CardTitle>📧 Email Testing for Campus Wealth Tracker</CardTitle>
					<CardDescription>
						Test the budget alert email functionality to ensure emails are being
						sent correctly.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Button
						onClick={testBudgetAlerts}
						disabled={loading}
						className="w-full"
					>
						{loading ? "Triggering Budget Alerts..." : "🚨 Test Budget Alerts"}
					</Button>

					{result && (
						<Card
							className={result.success ? "border-green-500" : "border-red-500"}
						>
							<CardContent className="pt-6">
								<pre className="text-sm overflow-auto">
									{JSON.stringify(result, null, 2)}
								</pre>
							</CardContent>
						</Card>
					)}

					<div className="text-sm text-muted-foreground space-y-2">
						<p>
							<strong>Instructions:</strong>
						</p>
						<ol className="list-decimal list-inside space-y-1">
							<li>Click the "Test Budget Alerts" button above</li>
							<li>Check your terminal/console for detailed logs</li>
							<li>
								Check your email inbox (and spam folder) for budget alerts
							</li>
							<li>
								Emails are sent from: <code>onboarding@resend.dev</code>
							</li>
						</ol>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
