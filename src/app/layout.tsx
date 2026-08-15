import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/splash-screen";

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Scrolla",
	description: "Belajar sambil scroll",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="id" className={`${plusJakartaSans.variable} h-full antialiased`}>
			<body className="min-h-full bg-zinc-800">
				<SplashScreen>
					<div className="mx-auto flex h-screen w-full max-w-[420px] flex-col overflow-hidden bg-white">
						{children}
					</div>
				</SplashScreen>
			</body>
		</html>
	);
}
