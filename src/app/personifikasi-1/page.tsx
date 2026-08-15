"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
	{ id: "javascript", label: "JavaScript Dasar" },
	{ id: "python", label: "Python Dasar" },
	{ id: "uiux", label: "Desain UI/UX" },
	{ id: "marketing", label: "Digital Marketing" },
	{ id: "data", label: "Data Analytics" },
	{ id: "speaking", label: "Public Speaking" },
];

export default function PersonifikasiSatuPage() {
	const [selected, setSelected] = useState<string | null>(null);

	return (
		<div className="flex flex-1 flex-col bg-white px-8 py-10">
			<div className="mb-6 flex items-center gap-3">
				<div className="flex flex-1 gap-1">
					<div className="h-1.5 flex-1 rounded-full bg-primary" />
					<div className="h-1.5 flex-1 rounded-full bg-zinc-200" />
				</div>
				<span className="text-xs font-medium text-zinc-500">Langkah 1 dari 2</span>
			</div>
			<h1 className="text-2xl font-bold text-zinc-900">Mau belajar apa dulu?</h1>
			<p className="mt-2 text-sm text-zinc-500">
				Pilih satu topik buat mulai. Bisa nambah topik lain nanti.
			</p>
			<div className="mt-8 grid grid-cols-2 gap-4">
				{topics.map((topic) => {
					const isSelected = selected === topic.id;
					return (
						<button
							key={topic.id}
							type="button"
							onClick={() => setSelected(topic.id)}
							className={`flex flex-col items-center gap-3 rounded-2xl border px-4 py-6 text-center transition-colors ${
								isSelected ? "border-primary bg-primary/5" : "border-zinc-200 bg-white"
							}`}>
							<span
								className={`flex h-10 w-10 items-center justify-center rounded-full text-base font-bold ${
									isSelected ? "bg-primary text-white" : "bg-zinc-100 text-zinc-500"
								}`}>
								{topic.label[0]}
							</span>
							<span className="text-sm font-semibold text-zinc-900">
								{topic.label}
							</span>
						</button>
					);
				})}
			</div>
			<div className="mt-auto pt-8">
				<Link
					href={selected ? "/personifikasi-2" : "#"}
					aria-disabled={!selected}
					className={`flex h-12 w-full items-center justify-center rounded-full text-base font-semibold transition-colors ${
						selected
							? "bg-primary text-white"
							: "pointer-events-none bg-zinc-200 text-zinc-400"
					}`}>
					Lanjut
				</Link>
			</div>
		</div>
	);
}
