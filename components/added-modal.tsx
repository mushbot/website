import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

export default function AddedModal() {
	return (
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		<Dialog onOpenChange={() => (location.href = "/")} defaultOpen modal>
			<DialogContent>
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={80}
					height={80}
					fill="currentColor"
					className="mx-auto mb-3 text-sky-500"
					viewBox="0 0 16 16"
				>
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
				</svg>
				<DialogHeader>
					<DialogTitle className="text-center">
						You just added Zeyr!
					</DialogTitle>
					<DialogDescription className="text-center">
						Thank you! You are now all ready to start your journey with Zeyr!
					</DialogDescription>
				</DialogHeader>
				<DialogClose>
					<Button className="w-full block">Close</Button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	);
}
