"use client";

import * as React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import { useLocalStorage } from "react-use";
import { Button } from "./ui/button";

export function CookieAlert() {
    const [cookies, setCookies] = useLocalStorage("cookies", 0)
	return (
		<Dialog open={cookies === 0}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cookie alert 🍪</DialogTitle>
					<DialogDescription>
						For the use of this website, cookies are required, so if you want to continue navigating for this site, accept cookies.
					</DialogDescription>
				</DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setCookies(1)} className="w-full block" variant={"outline"}>Accept</Button>
                </DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
