export const defaultCategories = [
	// Income Categories
	{
		id: "pocket-money",
		name: "Pocket Money",
		type: "INCOME",
		color: "#22c55e", // green-500
		icon: "Wallet",
	},
	{
		id: "scholarship",
		name: "Scholarship",
		type: "INCOME",
		color: "#06b6d4", // cyan-500
		icon: "Award",
	},
	{
		id: "family-support",
		name: "Family Support",
		type: "INCOME",
		color: "#6366f1", // indigo-500
		icon: "Heart",
	},
	{
		id: "part-time-job",
		name: "Part-time Job",
		type: "INCOME",
		color: "#ec4899", // pink-500
		icon: "Briefcase",
	},
	{
		id: "internship-stipend",
		name: "Internship Stipend",
		type: "INCOME",
		color: "#f59e0b", // amber-500
		icon: "Laptop",
	},
	{
		id: "other-income",
		name: "Other Income",
		type: "INCOME",
		color: "#64748b", // slate-500
		icon: "Plus",
	},

	// Expense Categories
	{
		id: "mess-food",
		name: "Mess & Food",
		type: "EXPENSE",
		color: "#ef4444", // red-500
		icon: "UtensilsCrossed",
		subcategories: ["Mess Fees", "Canteen", "Food Delivery", "Groceries"],
	},
	{
		id: "study-materials",
		name: "Study Materials",
		type: "EXPENSE",
		color: "#f97316", // orange-500
		icon: "BookOpen",
		subcategories: [
			"Textbooks",
			"Stationery",
			"Lab Equipment",
			"Online Courses",
		],
	},
	{
		id: "hostel-fees",
		name: "Hostel & Accommodation",
		type: "EXPENSE",
		color: "#84cc16", // lime-500
		icon: "Building2",
		subcategories: ["Hostel Fees", "Room Rent", "Electricity", "Maintenance"],
	},
	{
		id: "transport",
		name: "Transport",
		type: "EXPENSE",
		color: "#06b6d4", // cyan-500
		icon: "Bus",
		subcategories: ["Bus Fare", "Train Tickets", "Auto/Taxi", "Home Visits"],
	},
	{
		id: "entertainment",
		name: "Entertainment",
		type: "EXPENSE",
		color: "#8b5cf6", // violet-500
		icon: "Film",
		subcategories: [
			"Movies",
			"Gaming",
			"College Events",
			"Outings with Friends",
		],
	},
	{
		id: "personal-care",
		name: "Personal Care",
		type: "EXPENSE",
		color: "#f43f5e", // rose-500
		icon: "Heart",
		subcategories: ["Haircut", "Cosmetics", "Medical", "Gym"],
	},
	{
		id: "shopping",
		name: "Shopping",
		type: "EXPENSE",
		color: "#ec4899", // pink-500
		icon: "ShoppingBag",
		subcategories: ["Clothing", "Electronics", "Accessories", "Gifts"],
	},
	{
		id: "healthcare",
		name: "Healthcare",
		type: "EXPENSE",
		color: "#14b8a6", // teal-500
		icon: "HeartPulse",
		subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
	},
	{
		id: "education",
		name: "Education",
		type: "EXPENSE",
		color: "#6366f1", // indigo-500
		icon: "GraduationCap",
		subcategories: ["Tuition", "Books", "Courses"],
	},
	{
		id: "personal",
		name: "Personal Care",
		type: "EXPENSE",
		color: "#d946ef", // fuchsia-500
		icon: "Smile",
		subcategories: ["Haircut", "Gym", "Beauty"],
	},
	{
		id: "travel",
		name: "Travel",
		type: "EXPENSE",
		color: "#0ea5e9", // sky-500
		icon: "Plane",
	},
	{
		id: "insurance",
		name: "Insurance",
		type: "EXPENSE",
		color: "#64748b", // slate-500
		icon: "Shield",
		subcategories: ["Life", "Home", "Vehicle"],
	},
	{
		id: "gifts",
		name: "Gifts & Donations",
		type: "EXPENSE",
		color: "#f472b6", // pink-400
		icon: "Gift",
	},
	{
		id: "bills",
		name: "Bills & Fees",
		type: "EXPENSE",
		color: "#fb7185", // rose-400
		icon: "Receipt",
		subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
	},
	{
		id: "other-expense",
		name: "Other Expenses",
		type: "EXPENSE",
		color: "#94a3b8", // slate-400
		icon: "MoreHorizontal",
	},
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
	// Map both ID and name to color for flexibility
	acc[category.id] = category.color;
	acc[category.name] = category.color;
	return acc;
}, {});

// Fallback color for categories not in the mapping
export const getCategoryColor = (categoryKey) => {
	return categoryColors[categoryKey] || "#94a3b8"; // slate-400 as fallback
};
