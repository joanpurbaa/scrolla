"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
	{
		id: "q1",
		prompt: "Apa fungsi dari keyword const di JavaScript?",
		options: [
			"Membuat variabel yang nilainya bisa diubah kapan saja.",
			"Mendeklarasikan variabel dengan nilai tetap yang tidak bisa di-assign ulang.",
			"Membuat function baru secara otomatis.",
			"Menghapus variabel dari memory.",
		],
	},
	{
		id: "q2",
		prompt: "Apa yang dimaksud dengan function di JavaScript?",
		options: [
			"Blok kode yang bisa dipanggil ulang untuk menjalankan tugas tertentu.",
			"Tempat menyimpan banyak data sekaligus dalam satu variabel.",
			"Cara untuk menghapus elemen dari array.",
			"Jenis data seperti angka atau teks.",
		],
	},
	{
		id: "q3",
		prompt: "Struktur data apa yang cocok untuk menyimpan daftar item berurutan?",
		options: ["Object", "Array", "Boolean", "String"],
	},
	{
		id: "q4",
		prompt: "Apa perbedaan utama antara object dan array?",
		options: [
			"Array pakai key-value pair, object pakai index angka.",
			"Object menyimpan data dengan key-value pair, array pakai index angka berurutan.",
			"Keduanya persis sama, cuma beda penulisan.",
			"Object cuma bisa nyimpen satu nilai, array bisa banyak.",
		],
	},
	{
		id: "q5",
		prompt: "Kondisi if/else digunakan untuk apa dalam pemrograman?",
		options: [
			"Mengulang kode beberapa kali.",
			"Menyimpan data ke dalam variabel.",
			"Menjalankan kode berbeda berdasarkan sebuah kondisi.",
			"Membuat function baru.",
		],
	},
];

export default function PersonifikasiDuaPage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [showResult, setShowResult] = useState(false);

	const currentQuestion = questions[currentIndex];
	const isLastQuestion = currentIndex === questions.length - 1;
	const progress = ((currentIndex + 1) / questions.length) * 100;

	const handleNext = () => {
		if (isLastQuestion) {
			setShowResult(true);
			return;
		}
		setCurrentIndex((prev) => prev + 1);
		setSelectedOption(null);
	};

	return (
		<div className="relative flex flex-1 flex-col bg-white px-8 py-10">
			<div className="mb-6 flex items-center justify-between">
				<span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
					Langkah 2 dari 2
				</span>
				<Link href="/beranda" className="text-xs font-semibold text-secondary">
					Lewati assessment
				</Link>
			</div>

			<div className="mb-8 flex gap-1">
				{questions.map((question, index) => (
					<div
						key={question.id}
						className={`h-1.5 flex-1 rounded-full ${
							index <= currentIndex ? "bg-primary" : "bg-zinc-200"
						}`}
					/>
				))}
			</div>

			<h1 className="text-2xl font-bold text-zinc-900">
				Sejauh mana <span className="text-primary">kamu</span> udah tahu soal ini?
			</h1>

			<div className="mt-6 flex items-center gap-3">
				<span className="text-xs font-medium text-zinc-500">
					Soal {currentIndex + 1} dari {questions.length}
				</span>
				<div className="h-1.5 flex-1 rounded-full bg-zinc-200">
					<div
						className="h-1.5 rounded-full bg-primary transition-all duration-300"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			<div className="mt-6 rounded-2xl bg-zinc-50 px-5 py-4">
				<p className="text-base font-medium text-zinc-900">
					{currentQuestion.prompt}
				</p>
			</div>

			<div className="mt-6 flex flex-col gap-3">
				{currentQuestion.options.map((option, index) => {
					const isSelected = selectedOption === index;
					return (
						<button
							key={option}
							type="button"
							onClick={() => setSelectedOption(index)}
							className={`flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-colors ${
								isSelected
									? "border-primary bg-primary text-white"
									: "border-zinc-200 bg-white text-zinc-900"
							}`}>
							<span>{option}</span>
							<span
								className={`h-5 w-5 shrink-0 rounded-full border-2 ${
									isSelected ? "border-white bg-white/20" : "border-zinc-300"
								}`}
							/>
						</button>
					);
				})}
			</div>

			<div className="mt-auto pt-8">
				<button
					type="button"
					disabled={selectedOption === null}
					onClick={handleNext}
					className={`flex h-12 w-full items-center justify-center gap-2 rounded-full text-base font-semibold transition-colors ${
						selectedOption !== null
							? "bg-primary text-white cursor-pointer"
							: "bg-zinc-200 text-zinc-400 cursor-not-allowed"
					}`}>
					Lanjut
					<ArrowRight className="h-5 w-5" />
				</button>
			</div>

			<AnimatePresence>
				{showResult && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 z-20 flex flex-col justify-end bg-zinc-950/50 backdrop-blur-xs">
						<motion.div
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: "100%", opacity: 0 }}
							transition={{ type: "spring", damping: 25, stiffness: 220 }}
							className="rounded-t-[32px] bg-white px-8 pb-8 pt-10 text-center shadow-2xl">
							<div className="relative mx-auto mb-6 flex h-36 w-36 items-center justify-center">
								<motion.div
									animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
									transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
									className="absolute inset-0 rounded-full bg-purple-100/70"
								/>

								<motion.div
									animate={{ y: [-3, 4, -3], rotate: [0, 10, 0] }}
									transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
									className="absolute top-2 right-2 text-rose-400">
									<svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
									</svg>
								</motion.div>

								<motion.div
									animate={{ y: [4, -4, 4], rotate: [0, -15, 0] }}
									transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
									className="absolute bottom-4 left-1 text-amber-600">
									<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
									</svg>
								</motion.div>

								<motion.div
									initial={{ scale: 0, rotate: -30 }}
									animate={{ scale: 1, rotate: 0 }}
									transition={{
										type: "spring",
										delay: 0.15,
										stiffness: 260,
										damping: 20,
									}}
									className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-200">
									<Check className="h-9 w-9 stroke-[3]" />
								</motion.div>
							</div>

							<motion.h2
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="text-2xl font-bold text-zinc-900">
								Profil belajar kamu siap!
							</motion.h2>

							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.25 }}
								className="mt-2 text-sm text-zinc-500 leading-relaxed px-2">
								Kamu udah paham variable dan const. Scrolla bakal mulai dari function ke
								depannya.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="mt-6 flex items-center justify-between rounded-2xl border border-purple-100 bg-purple-50/60 p-4 text-left transition-all">
								<div className="flex items-center gap-3.5">
									<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white shadow-xs">
										<Code2 className="h-5 w-5" />
									</div>
									<div>
										<span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
											Materi Selanjutnya
										</span>
										<h4 className="text-sm font-bold text-zinc-900">Functions & Scope</h4>
									</div>
								</div>
								<ChevronRight className="h-5 w-5 text-zinc-400" />
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.35 }}
								className="mt-5">
								<Link
									href="/beranda"
									className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-purple-600 text-base font-semibold text-white shadow-md shadow-purple-200 hover:bg-purple-700 transition-colors">
									Mulai scroll & belajar
									<ArrowRight className="h-5 w-5" />
								</Link>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
