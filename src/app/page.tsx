import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="relative flex flex-1 flex-col overflow-hidden">
			<Image
				src="/the-thinker.png"
				alt="Scrolla"
				fill
				priority
				sizes="420px"
				className="object-cover"
			/>
			<div className="relative flex flex-1 flex-col justify-between px-8 py-20">
				<div>
					<h1 className="text-5xl font-extrabold text-white">Scrolla</h1>
					<p className="mt-2 text-xl text-white/90">Scroll terus, pintar terus!</p>
				</div>
				<div className="flex flex-col gap-4">
					<Link
						href="/masuk"
						className="flex h-14 items-center justify-center rounded-full bg-secondary text-base font-semibold text-white shadow-2xl">
						Masuk
					</Link>
					<p className="text-center text-sm text-white/90">
						Belum punya akun?{" "}
						<Link href="/daftar" className="font-semibold underline">
							daftar
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}