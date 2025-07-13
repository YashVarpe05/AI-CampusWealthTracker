"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { success } from "zod";

const serializedTransaction = (obj) => {
	const serialized = { ...obj };
	if (obj.balance) {
		serialized.balance = obj.balance.toNumber();
	}
	if (obj.amount) {
		serialized.amount = obj.amount.toNumber();
	}
	return serialized;
};

export async function updateDefaultAccount(accountId) {
	try {
		const { userId } = await auth();
		if (!userId) throw new Error("User not authenticated");
		const user = await db.user.findUnique({
			where: { clerkUserId: userId },
		});
		if (!user) {
			throw new Error("User not found");
		}
		await db.account.updateMany({
			where: {
				userId: user.id,
				isDefault: true,
			},
			data: {
				isDefault: false,
			},
		});

		const account = await db.account.update({
			where: {
				id: accountId,
				userId: user.id,
			},
			data: {
				isDefault: true,
			},
		});
		revalidatePath("/dashboard");
		return { success: true, data: serializedTransaction(account) };
	} catch (error) {
		return { success: false, error: error.message || "An error occurred" };
	}
}

export async function getAccountWithTransactions(accountId) {
	const { userId } = await auth();
	if (!userId) throw new Error("User not authenticated");
	const user = await db.user.findUnique({
		where: { clerkUserId: userId },
	});
	if (!user) {
		throw new Error("User not found");
	}

	const account = await db.account.findUnique({
		where: {
			id: accountId,
			userId: user.id,
		},
		include: {
			transactions: {
				orderBy: { date: "desc" },
			},
			_count: {
				select: { transactions: true },
			},
		},
	});
	if (!account) return null;
	return {
		...serializedTransaction(account),
		transactions: account.transactions.map(serializedTransaction),
	};
}

export async function bulkDeleteTransactions(transactionIds) {
	try {
		const { userId } = await auth();
		if (!userId) throw new Error("User not authenticated");
		const user = await db.user.findUnique({
			where: { clerkUserId: userId },
		});
		if (!user) {
			throw new Error("User not found");
		}
		const transactions = await db.transaction.findMany({
			where: {
				id: { in: transactionIds },
				userId: user.id,
			},
		});
		const accountBalanceChanges = transactions.reduce((acc, transaction) => {
			const change =
				transaction.type === "EXPENSE"
					? transaction.amount
					: -transaction.amount;
			acc[transaction.accountId] = (acc[transaction.accountId] || 0) + change;
			return acc;
		}, {});
		await db.$transaction(async (tx) => {
			await tx.transaction.deleteMany({
				where: {
					id: { in: transactionIds },
					userId: user.id,
				},
			});
			for (const [accountId, balanceChange] of Object.entries(
				accountBalanceChanges
			)) {
				await tx.account.update({
					where: { id: accountId },
					data: {
						balance: {
							increment: balanceChange,
						},
					},
				});
			}
		});
		revalidatePath("/dashboard");
		revalidatePath("/account/[id/")
	} catch (error) {
		return { success: false, error: error.message || "An error occurred" };
	}
}
