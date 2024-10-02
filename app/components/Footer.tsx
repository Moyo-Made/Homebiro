import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<section id="contact" className="flex justify-center mt-16 mb-5">
			<h2 className="font-bold">Contact Us:</h2>
			<div className="flex flex-col gap-1">
				<div className="flex gap-1 ml-2">
					<Image
						src="/icons/email.svg"
						alt="Email icon"
						width={20}
						height={20}
					/>
					<Link
						href="mailto:admin@homebiro.com"
						target="__blank"
						className="hover:underline"
					>
						admin@homebiro.com
					</Link>
				</div>

				<div className="flex gap-1 ml-2">
					<Image src="/icons/x.png" alt="X icon" width={20} height={20} />
					<Link
						href="https://x.com/homebiro"
						target="__blank"
						className="hover:underline"
					>
						@homebiro
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Footer;
