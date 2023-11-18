import { ThemeChanger } from "@/components/theme-changer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Image from "next/image";
import "./globals.css";

import { CookieAlert } from "@/components/cookies";
import Logo from "@/public/logo.png";
import Link from "next/link";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased relative flex flex-col",
						fontSans.variable,
					)}
				>
					<CookieAlert />
					<header className="sticky top-0 z-50 py-3 px-5 w-full border-b bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
						<div className="flex h-14 items-center justify-between">
							<Link href="/" className="flex items-center gap-2 group">
								<Image
									className="group-hover:translate-x-6 duration-150"
									src={Logo}
									alt={"Zeyr Logo"}
									placeholder="blur"
									blurDataURL={Logo.blurDataURL}
									width={40}
									height={40}
								/>
								<h1 className="text-2xl font-bold group-hover:-translate-x-3 group-hover:opacity-0 duration-150">
									Zeyr
								</h1>
							</Link>
							<div>
								<ThemeChanger />
							</div>
						</div>
					</header>

					<main className="p-8">{children}</main>
				</body>
			</ThemeProvider>
		</html>
	);
}
