"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	useEffect(() => {
		console.error("Products error:", error);
	}, [error]);

	const handleRetry = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};

	return (
		<div className="flex flex-col items-center justify-center p-8 border border-neutral-300 rounded-xl bg-neutral-50 my-6">
			<h2 className="font-bold text-lg text-red-600">Something went wrong!</h2>
			<p className="text-sm text-neutral-600 mt-1 mb-4">
				{error.message || "An unexpected error occurred while loading products."}
			</p>
			<button
				onClick={handleRetry}
				className="px-4 py-2 rounded-xl border border-neutral-800 bg-white text-sm font-medium transition-all hover:bg-neutral-100 shadow-xs"
			>
				Try again
			</button>
		</div>
	);
}