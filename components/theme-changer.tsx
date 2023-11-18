"use client";

import { LogIn, Moon, SunDim, User } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeChanger() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<User className="w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-64" align="end">
				<DropdownMenuLabel>User</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem disabled>
					<LogIn className="w-4 mr-2" /> Login{" "}
					<span className="text-xs text-red-500 ml-auto">
						A session is required
					</span>
				</DropdownMenuItem>
				<DropdownMenuLabel>Website</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				>
					{theme === "dark" ? (
						<SunDim className="w-4 mr-2" />
					) : (
						<Moon className="w-4 mr-2" />
					)}
					{theme === "light" ? "Dark theme" : "Light theme"}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
