"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(
				"peer data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 focus-visible:border-ring focus-visible:ring-ring/50 hover:data-[state=checked]:bg-gray-700 hover:data-[state=unchecked]:bg-gray-300 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"bg-white data-[state=checked]:bg-white data-[state=unchecked]:bg-white pointer-events-none block size-4 rounded-full ring-0 shadow-sm transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
				)}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
