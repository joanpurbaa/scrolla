"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, Heart, ChevronDown, AtSign, Smile } from "lucide-react";

type Reply = {
	id: string;
	username: string;
	avatar: string;
	text: string;
	time: string;
	likes: number;
};

type Comment = {
	id: string;
	username: string;
	avatar: string;
	text: string;
	time: string;
	likes: number;
	replies: Reply[];
};

const comments: Comment[] = [
	{
		id: "1",
		username: "budi_santoso",
		avatar: "/icon.png",
		text: "Wah baru ngerti ternyata gini toh bedanya let sama const",
		time: "2j",
		likes: 128,
		replies: [
			{
				id: "1-1",
				username: "sinta_dev",
				avatar: "/icon.png",
				text: "Sama, video ini bikin paham banget!",
				time: "1j",
				likes: 34,
			},
		],
	},
	{
		id: "2",
		username: "raka_koding",
		avatar: "/icon.png",
		text: "Lanjut ke function dong kak",
		time: "3j",
		likes: 56,
		replies: [],
	},
];

export default function CommentSheet({
	open,
	onClose,
	totalComments,
}: {
	open: boolean;
	onClose: () => void;
	totalComments: string;
}) {
	const [visible, setVisible] = useState(false);
	const [expandedIds, setExpandedIds] = useState<string[]>([]);
	const [likedCommentIds, setLikedCommentIds] = useState<string[]>([]);

	useEffect(() => {
		if (open) {
			const timeout = setTimeout(() => setVisible(true), 10);
			return () => clearTimeout(timeout);
		}
		setVisible(false);
	}, [open]);

	const toggleReplies = (id: string) => {
		setExpandedIds((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
		);
	};

	const toggleCommentLike = (id: string) => {
		setLikedCommentIds((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
		);
	};

	if (!open) return null;

	return (
		<div
			className={`absolute inset-0 z-40 flex flex-col justify-end bg-black/50 transition-opacity duration-300 ${
				visible ? "opacity-100" : "opacity-0"
			}`}>
			<div
				className={`flex h-[70%] flex-col rounded-t-3xl bg-white transition-transform duration-300 ${
					visible ? "translate-y-0" : "translate-y-full"
				}`}>
				<div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
					<span className="w-6" />
					<h2 className="text-sm font-bold text-zinc-900">
						{totalComments} komentar
					</h2>
					<button type="button" onClick={onClose}>
						<X className="h-5 w-5 text-zinc-900" />
					</button>
				</div>

				<div className="flex-1 overflow-y-scroll px-5 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					<div className="flex flex-col gap-5">
						{comments.map((comment) => {
							const isExpanded = expandedIds.includes(comment.id);
							const isCommentLiked = likedCommentIds.includes(comment.id);
							return (
								<div key={comment.id} className="flex flex-col gap-3">
									<div className="flex items-start gap-3">
										<div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
											<Image
												src={comment.avatar}
												alt={comment.username}
												width={36}
												height={36}
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<p className="text-sm font-semibold text-zinc-900">
												{comment.username}
											</p>
											<p className="mt-0.5 text-sm text-zinc-800">
												{comment.text}{" "}
												<span className="text-xs text-zinc-400">{comment.time}</span>
											</p>
											{comment.replies.length > 0 && (
												<button
													type="button"
													onClick={() => toggleReplies(comment.id)}
													className="mt-1.5 flex items-center gap-1 text-xs font-medium text-zinc-400">
													Lihat balasan ({comment.replies.length})
													<ChevronDown
														className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
													/>
												</button>
											)}
										</div>
										<button
											type="button"
											onClick={() => toggleCommentLike(comment.id)}
											className="flex flex-col items-center gap-1">
											<Heart
												className="h-4 w-4"
												fill={isCommentLiked ? "url(#heartGradient)" : "none"}
												stroke={isCommentLiked ? "url(#heartGradient)" : "#a1a1aa"}
											/>
											<span className="text-[10px] text-zinc-400">
												{comment.likes + (isCommentLiked ? 1 : 0)}
											</span>
										</button>
									</div>

									{isExpanded &&
										comment.replies.map((reply) => {
											const isReplyLiked = likedCommentIds.includes(reply.id);
											return (
												<div key={reply.id} className="flex items-start gap-3 pl-10">
													<div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
														<Image
															src={reply.avatar}
															alt={reply.username}
															width={32}
															height={32}
															className="h-full w-full object-cover"
														/>
													</div>
													<div className="flex-1">
														<p className="text-sm font-semibold text-zinc-900">
															{reply.username}
														</p>
														<p className="mt-0.5 text-sm text-zinc-800">
															{reply.text}{" "}
															<span className="text-xs text-zinc-400">{reply.time}</span>
														</p>
													</div>
													<button
														type="button"
														onClick={() => toggleCommentLike(reply.id)}
														className="flex flex-col items-center gap-1">
														<Heart
															className="h-4 w-4"
															fill={isReplyLiked ? "url(#heartGradient)" : "none"}
															stroke={isReplyLiked ? "url(#heartGradient)" : "#a1a1aa"}
														/>
														<span className="text-[10px] text-zinc-400">
															{reply.likes + (isReplyLiked ? 1 : 0)}
														</span>
													</button>
												</div>
											);
										})}
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex items-center gap-3 border-t border-zinc-100 px-5 py-3">
					<input
						type="text"
						placeholder="Tambah komentar..."
						className="flex-1 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
					/>
					<AtSign className="h-5 w-5 text-zinc-400" />
					<Smile className="h-5 w-5 text-zinc-400" />
				</div>
			</div>
		</div>
	);
}
