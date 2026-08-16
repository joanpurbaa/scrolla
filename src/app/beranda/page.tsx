"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";
import BottomNav from "@/components/bottom-nav";

const feedItems = [
	{
		id: "1",
		source: "@scrolla.edu",
		caption:
			"Variable itu kayak kotak buat nyimpen data. Nama boleh apa aja, asal jelas.",
		sound: "Suara asli - Scrolla",
		likes: "12.4K",
		comments: "342",
	},
	{
		id: "2",
		source: "@scrolla.edu",
		caption:
			"Function itu kayak resep masakan, dikasih bahan (parameter), keluar hasil (return).",
		sound: "Suara asli - Scrolla",
		likes: "8.9K",
		comments: "218",
	},
	{
		id: "3",
		source: "@scrolla.edu",
		caption:
			"Array itu daftar berurutan. Bayangin rak buku, tiap buku punya nomor urut.",
		sound: "Suara asli - Scrolla",
		likes: "15.2K",
		comments: "501",
	},
];

export default function BerandaPage() {
	const [likedIds, setLikedIds] = useState<string[]>([]);

	const toggleLike = (id: string) => {
		setLikedIds((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
		);
	};

	return (
		<div className="relative flex flex-1 flex-col overflow-hidden bg-black">
			<div className="h-full snap-y snap-mandatory overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				{feedItems.map((item) => {
					const isLiked = likedIds.includes(item.id);
					return (
						<div key={item.id} className="relative h-full w-full snap-start">
							<video
								src="/splash-screen.mp4"
								autoPlay
								muted
								loop
								playsInline
								className="absolute inset-0 h-full w-full object-cover"
							/>

							<div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-5">
								<div className="relative">
									<div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
										<Image
											src="/icon.png"
											alt="Profil kamu"
											width={48}
											height={48}
											className="h-full w-full object-cover"
										/>
									</div>
									<button
										type="button"
										className="absolute -bottom-2 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-secondary">
										<Plus className="h-3 w-3 text-white" strokeWidth={3} />
									</button>
								</div>
								<button
									type="button"
									onClick={() => toggleLike(item.id)}
									className="flex flex-col items-center gap-1">
									<Image
										src="/like.svg"
										alt="Suka"
										width={32}
										height={32}
										className={isLiked ? "" : "opacity-90"}
									/>
									<span className="text-xs font-semibold text-white">{item.likes}</span>
								</button>
								<button type="button" className="flex flex-col items-center gap-1">
									<Image src="/comment.svg" alt="Komentar" width={32} height={32} />
									<span className="text-xs font-semibold text-white">
										{item.comments}
									</span>
								</button>
								<button type="button" className="flex flex-col items-center gap-1">
									<Image src="/share.svg" alt="Bagikan" width={32} height={32} />
									<span className="text-xs font-semibold text-white">Share</span>
								</button>
								<div
									className="mt-1 flex h-10 w-10 animate-spin items-center justify-center"
									style={{ animationDuration: "3s" }}>
									<Image src="/disc.svg" alt="Suara" width={40} height={40} />
								</div>
							</div>

							<div className="absolute inset-x-0 bottom-20 z-10 pl-4 pr-20">
								<p className="text-sm font-semibold text-white">{item.source}</p>
								<p className="mt-1 break-words text-sm text-white/90">{item.caption}</p>
								<div className="mt-2 flex items-center gap-1.5 text-white/90">
									<Image src="/note.svg" alt="" width={14} height={14} />
									<span className="truncate text-xs">{item.sound}</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<BottomNav active="beranda" />
		</div>
	);
}
