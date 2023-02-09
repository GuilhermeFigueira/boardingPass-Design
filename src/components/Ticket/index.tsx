import { ReactNode } from "react";

interface PassProps {
	children: ReactNode;
	top?: boolean;
	bottom?: boolean;
	both?: boolean;
}

export default function Ticket({
	children,
	top = false,
	bottom = false,
	both = false,
}: PassProps) {
	return (
		<div
			className={`bg-white rounded-3xl  ${top && "top-tick"} ${
				bottom && "bottom-tick"
			} 
			${both && "both-ticks border-y-2 border-[#adadad] border-dashed "} 
			`}
		>
			{children}
		</div>
	);
}
