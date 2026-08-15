"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

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
	const [resultVisible, setResultVisible] = useState(false);

	const currentQuestion = questions[currentIndex];
	const isLastQuestion = currentIndex === questions.length - 1;
	const progress = ((currentIndex + 1) / questions.length) * 100;

	useEffect(() => {
		if (showResult) {
			const timeout = setTimeout(() => setResultVisible(true), 10);
			return () => clearTimeout(timeout);
		}
		setResultVisible(false);
	}, [showResult]);

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
						className="h-1.5 rounded-full bg-primary transition-all"
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
									isSelected ? "border-white" : "border-zinc-300"
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
							? "bg-primary text-white"
							: "bg-zinc-200 text-zinc-400"
					}`}>
					Lanjut
					<ArrowRight className="w-5 h-5" />
				</button>
			</div>

			{showResult && (
				<div
					className={`absolute inset-0 z-10 flex flex-col justify-end bg-zinc-900/40 transition-opacity duration-300 ${
						resultVisible ? "opacity-100" : "opacity-0"
					}`}>
					<div
						className={`rounded-t-3xl bg-white px-8 pb-10 pt-8 transition-all duration-300 ${
							resultVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
						}`}>
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
							<span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									className="h-5 w-5"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M20 6L9 17l-5-5" />
								</svg>
							</span>
						</div>
						<h2 className="mt-5 text-center text-xl font-bold text-zinc-900">
							Profil belajar kamu siap!
						</h2>
						<p className="mt-2 text-center text-sm text-zinc-500">
							Kamu udah paham variable dan const. Scrolla bakal mulai dari function ke
							depannya.
						</p>
						<Link
							href="/beranda"
							className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-base font-semibold text-white">
							Mulai scroll & belajar
							<Flame className="fill-orange-400 text-yellow-300" />
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
