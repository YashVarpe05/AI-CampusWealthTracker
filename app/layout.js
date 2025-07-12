import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata = {
	title: "Campus Wealth Tracker",
	description: "Track your campus wealth",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className}`} suppressHydrationWarning={true}>
					{/* Header */}
					<Header />
					<main className="min-h-screen">{children}</main>
					<Toaster richColors />
					{/* footer */}
					<footer className="bg-blue-50 py-12">
						<div className="container  mx-auto px-4 text-center  text-gray-600 ">
							<p>© 2023 Campus Wealth Tracker. All rights reserved.</p>
						</div>
					</footer>
				</body>
			</html>
		</ClerkProvider>
	);
}
