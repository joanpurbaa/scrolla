import Link from "next/link";
import Image from "next/image";

export default function BottomNav({
	active,
}: {
	active: "beranda" | "profil";
}) {
	return (
		<div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-around bg-black px-2 pb-4 pt-2">
			<Link
				href="/beranda"
				className={`flex flex-col items-center gap-1 text-xs ${
					active === "beranda" ? "font-bold text-white" : "font-medium text-white/50"
				}`}>
				<div className="flex h-6 items-center justify-center">
					<Image
						src="/home.svg"
						alt="Beranda"
						width={23}
						height={23}
						className={active === "beranda" ? "" : "opacity-50"}
					/>
				</div>
				Beranda
			</Link>

			<button
				type="button"
				disabled
				className="flex flex-col items-center gap-1 text-xs font-medium text-white/50">
				<div className="flex h-6 items-center justify-center">
					<Image
						src="/search.svg"
						alt="Cari"
						width={23}
						height={23}
						className="opacity-50"
					/>
				</div>
				Cari
			</button>

			<button
				type="button"
				disabled
				className="flex flex-col items-center gap-1 text-xs -me-5">
				<div className="flex h-6 items-center justify-center -mb-4">
					<Image src="/add.svg" alt="Tambah" width={38} height={38} />
				</div>
				<span className="opacity-0">Tambah</span>
			</button>

			<button
				type="button"
				disabled
				className="flex flex-col items-center gap-1 text-xs font-medium text-white/50">
				<div className="flex h-6 items-center justify-center">
					<Image
						src="/inbox.svg"
						alt="Kotak Masuk"
						width={23}
						height={23}
						className="opacity-50"
					/>
				</div>
				Kotak Masuk
			</button>

			<Link
				href="/profil"
				className={`flex flex-col items-center gap-1 text-xs ${
					active === "profil" ? "font-bold text-white" : "font-medium text-white/50"
				}`}>
				<div className="flex h-6 items-center justify-center">
					<Image
						src="/profil.svg"
						alt="Profil"
						width={23}
						height={23}
						className={active === "profil" ? "" : "opacity-50"}
					/>
				</div>
				Profil
			</Link>
		</div>
	);
}
