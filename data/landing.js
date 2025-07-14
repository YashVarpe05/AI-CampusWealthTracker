import {
	BarChart3,
	Receipt,
	PieChart,
	CreditCard,
	Globe,
	Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
	{
		value: "10K+",
		label: "Campus Students",
	},
	{
		value: "₹50L+",
		label: "Student Money Tracked",
	},
	{
		value: "99.9%",
		label: "Uptime",
	},
	{
		value: "4.8/5",
		label: "Student Rating",
	},
];

// Features Data
export const featuresData = [
	{
		icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
		title: "Student Expense Analytics",
		description:
			"Get detailed insights into your campus spending patterns with AI-powered analytics tailored for students",
	},
	{
		icon: <Receipt className="h-8 w-8 text-blue-600" />,
		title: "Smart Receipt Scanner",
		description:
			"Scan mess bills, book receipts, and campus purchases automatically using AI technology",
	},
	{
		icon: <PieChart className="h-8 w-8 text-blue-600" />,
		title: "Student Budget Planning",
		description:
			"Create monthly budgets for mess fees, study materials, entertainment and pocket money",
	},
	{
		icon: <CreditCard className="h-8 w-8 text-blue-600" />,
		title: "Multiple Account Support",
		description:
			"Manage savings account, student loan account, and family support funds in one place",
	},
	{
		icon: <Globe className="h-8 w-8 text-blue-600" />,
		title: "Indian Currency Support",
		description:
			"Built specifically for Indian campus students with ₹ (INR) currency support",
	},
	{
		icon: <Zap className="h-8 w-8 text-blue-600" />,
		title: "Smart Campus Insights",
		description:
			"Get automated financial insights and spending recommendations for student life",
	},
];

// How It Works Data
export const howItWorksData = [
	{
		icon: <CreditCard className="h-8 w-8 text-blue-600" />,
		title: "1. Create Your Student Account",
		description:
			"Get started in minutes with our simple and secure sign-up process designed for students",
	},
	{
		icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
		title: "2. Track Your Campus Spending",
		description:
			"Automatically categorize and track your mess fees, study expenses, and entertainment spending in real-time",
	},
	{
		icon: <PieChart className="h-8 w-8 text-blue-600" />,
		title: "3. Get Smart Student Insights",
		description:
			"Receive AI-powered insights and recommendations to optimize your student budget and save money on campus",
	},
];

// Testimonials Data
export const testimonialsData = [
	{
		name: "Priya Sharma",
		role: "Engineering Student",
		image: "https://randomuser.me/api/portraits/women/75.jpg",
		quote:
			"Campus Wealth Tracker has completely changed how I manage my student budget. Now I can track my mess fees, study expenses, and still save money for trips home!",
	},
	{
		name: "Rahul Kumar",
		role: "MBA Student",
		image: "https://randomuser.me/api/portraits/men/75.jpg",
		quote:
			"As an MBA student managing internship stipends and study loans, this app helps me track every rupee. The budget alerts saved me from overspending on books this semester!",
	},
	{
		name: "Ananya Patel",
		role: "Medical Student",
		image: "https://randomuser.me/api/portraits/women/74.jpg",
		quote:
			"Perfect for campus life! I track my hostel fees, medical textbook costs, and pocket money all in one place. The AI insights help me save for my USMLE exam fees.",
	},
];
