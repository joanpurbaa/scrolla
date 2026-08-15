"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function DaftarPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex flex-1 flex-col justify-center bg-white px-8 py-12">
			<div className="mb-10">
				<h1 className="text-3xl font-bold text-zinc-900">Buat akun</h1>
				<p className="mt-2 text-base text-zinc-500">
					Yuk scrolling bareng{" "}
					<span className="font-semibold text-primary">Scrolla!</span>
				</p>
			</div>
			<form className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<label htmlFor="nama" className="text-sm font-medium text-zinc-700">
						Nama
					</label>
					<input
						id="nama"
						type="text"
						placeholder="Nama kamu"
						className="h-12 rounded-xl bg-zinc-100 px-4 text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-primary"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="text-sm font-medium text-zinc-700">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email kamu"
						className="h-12 rounded-xl bg-zinc-100 px-4 text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-primary"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="password" className="text-sm font-medium text-zinc-700">
						Kata sandi
					</label>
					<div className="relative">
						<input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="Minimal 8 karakter"
							className="h-12 w-full rounded-xl bg-zinc-100 px-4 pr-12 text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-primary"
						/>
						<button
							type="button"
							onClick={() => setShowPassword((prev) => !prev)}
							className="absolute inset-y-0 right-4 flex items-center text-zinc-400 hover:text-zinc-600">
							{showPassword ? (
								<EyeOff className="h-5 w-5 cursor-pointer" />
							) : (
								<Eye className="h-5 w-5 cursor-pointer" />
							)}
						</button>
					</div>
				</div>
				<Link
					href="/masuk"
					className="mt-4 flex h-12 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
					Daftar
				</Link>
			</form>
			<p className="mt-8 text-center text-sm text-zinc-500">
				Sudah punya akun?{" "}
				<Link href="/masuk" className="font-semibold text-secondary">
					masuk
				</Link>
			</p>
		</div>
	);
}
