"use client";

import { useRef, useState } from "react";

export default function SplashScreen({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showSplash, setShowSplash] = useState(true);
	const loopCount = useRef(0);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleEnded = () => {
		loopCount.current += 1;
		if (loopCount.current >= 1) {
			setShowSplash(false);
			return;
		}
		videoRef.current?.play();
	};

	return (
		<>
			{showSplash && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800">
					<div className="flex h-screen w-full max-w-[420px] items-center justify-center overflow-hidden bg-primary">
						<video
							ref={videoRef}
							src="/splash-screen.mp4"
							autoPlay
							muted
							playsInline
							onEnded={handleEnded}
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			)}
			{children}
		</>
	);
}
