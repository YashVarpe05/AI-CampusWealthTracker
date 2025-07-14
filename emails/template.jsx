import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";

// Dummy data for preview
const PREVIEW_DATA = {
	monthlyReport: {
		userName: "Priya Sharma",
		type: "monthly-report",
		data: {
			month: "December",
			stats: {
				totalIncome: 15000,
				totalExpenses: 12500,
				byCategory: {
					"mess-food": 4500,
					"study-materials": 2800,
					"hostel-fees": 3000,
					transport: 1200,
					entertainment: 1000,
				},
			},
			insights: [
				"Your mess and food expenses are 36% of your total spending - try cooking occasionally to save money.",
				"Great job managing your entertainment expenses this month! Perfect balance for student life.",
				"Consider buying second-hand textbooks next semester to reduce study material costs.",
			],
		},
	},
	budgetAlert: {
		userName: "Priya Sharma",
		type: "budget-alert",
		data: {
			percentageUsed: 85,
			budgetAmount: 15000,
			totalExpenses: 12750,
		},
	},
};

export default function EmailTemplate({
	userName = "",
	type = "monthly-report",
	data = {},
}) {
	if (type === "monthly-report") {
		return (
			<Html>
				<Head />
				<Preview>Your Monthly Financial Report</Preview>
				<Body style={styles.body}>
					<Container style={styles.container}>
						<Heading style={styles.title}>Monthly Financial Report</Heading>

						<Text style={styles.text}>Hello {userName},</Text>
						<Text style={styles.text}>
							Here&rsquo;s your financial summary for {data?.month}:
						</Text>

						{/* Main Stats */}
						<Section style={styles.statsContainer}>
							<div style={styles.stat}>
								<Text style={styles.text}>Total Income</Text>
								<Text style={styles.heading}>₹{data?.stats.totalIncome}</Text>
							</div>
							<div style={styles.stat}>
								<Text style={styles.text}>Total Expenses</Text>
								<Text style={styles.heading}>₹{data?.stats.totalExpenses}</Text>
							</div>
							<div style={styles.stat}>
								<Text style={styles.text}>Net Savings</Text>
								<Text style={styles.heading}>
									₹{data?.stats.totalIncome - data?.stats.totalExpenses}
								</Text>
							</div>
						</Section>

						{/* Category Breakdown */}
						{data?.stats?.byCategory && (
							<Section style={styles.section}>
								<Heading style={styles.heading}>
									Campus Expenses by Category
								</Heading>
								{Object.entries(data?.stats.byCategory).map(
									([category, amount]) => (
										<div key={category} style={styles.row}>
											<Text style={styles.text}>
												{category.replace("-", " ")}
											</Text>
											<Text style={styles.text}>₹{amount}</Text>
										</div>
									)
								)}
							</Section>
						)}

						{/* AI Insights */}
						{data?.insights && (
							<Section style={styles.section}>
								<Heading style={styles.heading}>Campus Wealth Insights</Heading>
								{data.insights.map((insight, index) => (
									<Text key={index} style={styles.text}>
										• {insight}
									</Text>
								))}
							</Section>
						)}

						<Text style={styles.footer}>
							Thank you for using Campus Wealth Tracker. Keep managing your
							student budget for a financially smart campus life!
						</Text>
					</Container>
				</Body>
			</Html>
		);
	}

	if (type === "budget-alert") {
		return (
			<Html>
				<Head />
				<Preview>Budget Alert</Preview>
				<Body style={styles.body}>
					<Container style={styles.container}>
						<Heading style={styles.title}>Campus Budget Alert</Heading>
						<Text style={styles.text}>Hello {userName},</Text>
						<Text style={styles.text}>
							You&rsquo;ve used {data?.percentageUsed.toFixed(1)}% of your
							monthly campus budget. Time to review your spending!
						</Text>
						<Section style={styles.statsContainer}>
							<div style={styles.stat}>
								<Text style={styles.text}>Budget Amount</Text>
								<Text style={styles.heading}>₹{data?.budgetAmount}</Text>
							</div>
							<div style={styles.stat}>
								<Text style={styles.text}>Spent So Far</Text>
								<Text style={styles.heading}>₹{data?.totalExpenses}</Text>
							</div>
							<div style={styles.stat}>
								<Text style={styles.text}>Remaining</Text>
								<Text style={styles.heading}>
									₹{data?.budgetAmount - data?.totalExpenses}
								</Text>
							</div>
						</Section>
					</Container>
				</Body>
			</Html>
		);
	}
}

const styles = {
	body: {
		backgroundColor: "#f6f9fc",
		fontFamily: "-apple-system, sans-serif",
	},
	container: {
		backgroundColor: "#ffffff",
		margin: "0 auto",
		padding: "20px",
		borderRadius: "5px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	},
	title: {
		color: "#1f2937",
		fontSize: "32px",
		fontWeight: "bold",
		textAlign: "center",
		margin: "0 0 20px",
	},
	heading: {
		color: "#1f2937",
		fontSize: "20px",
		fontWeight: "600",
		margin: "0 0 16px",
	},
	text: {
		color: "#4b5563",
		fontSize: "16px",
		margin: "0 0 16px",
	},
	section: {
		marginTop: "32px",
		padding: "20px",
		backgroundColor: "#f9fafb",
		borderRadius: "5px",
		border: "1px solid #e5e7eb",
	},
	statsContainer: {
		margin: "32px 0",
		padding: "20px",
		backgroundColor: "#f9fafb",
		borderRadius: "5px",
	},
	stat: {
		marginBottom: "16px",
		padding: "12px",
		backgroundColor: "#fff",
		borderRadius: "4px",
		boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
	},
	row: {
		display: "flex",
		justifyContent: "space-between",
		padding: "12px 0",
		borderBottom: "1px solid #e5e7eb",
	},
	footer: {
		color: "#6b7280",
		fontSize: "14px",
		textAlign: "center",
		marginTop: "32px",
		paddingTop: "16px",
		borderTop: "1px solid #e5e7eb",
	},
};
