// Debug utility for category colors
import {
	defaultCategories,
	categoryColors,
	getCategoryColor,
} from "@/data/categories";

console.log("=== CATEGORY COLOR DEBUG ===");
console.log("Total categories:", defaultCategories.length);
console.log("Category colors mapping:", categoryColors);

// Test some common categories
const testCategories = [
	"mess-food",
	"study-materials",
	"transport",
	"entertainment",
	"unknown-category",
];

testCategories.forEach((cat) => {
	console.log(`${cat}: ${getCategoryColor(cat)}`);
});

export { defaultCategories, categoryColors, getCategoryColor };
