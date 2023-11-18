"use client";

import AddedModal from "@/components/added-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Check,
	MessageCircle,
	Minus,
	PlusCircle,
	X,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
	const params = useSearchParams();

	const added = params.get("invited");
	return (
		<>
			{added === "yes" && <AddedModal />}
			<section className="flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 pb-8">
				<Badge variant={"secondary"} className="text-md">
					Zeyr releasing soon <ArrowRight className="ml-2 w-4" />
				</Badge>
				<h1 className="scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl flex gap-2 duration-75 transition-all">
					Imagine a bot for <span className="text-primary">everything</span>
				</h1>
				<span className="max-w-[750px] text-md text-muted-foreground sm:text-xl">
					Zeyr is a powerful and versatile Discord bot designed to enhance your
					server experience. With its advanced features and seamless
					integration, Zeyr is here to make your Discord community thrive! ⭐
				</span>
				<div className="flex flex-col gap-3 my-4">
					<div className="flex flex-row gap-2">
						<Check className="w-5 text-green-500" /> Image manipulation
					</div>
					<div className="flex flex-row gap-2">
						<Check className="w-5 text-green-500" /> Web interaction
					</div>
					<div className="flex flex-row gap-2">
						<Minus className="w-5 text-amber-500" /> Code execution
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Link target="_blank" href="https://discord.gg/3N8zt3PhWC">
						<Button>
							<MessageCircle className="mr-2 h-4 w-4" /> Join chat
						</Button>
					</Link>
					<Button disabled aria-disabled variant={"outline"}>
						<PlusCircle className="mr-2 h-4 w-4" /> Invite Zeyr
					</Button>
				</div>
			</section>
		</>
	);
}
