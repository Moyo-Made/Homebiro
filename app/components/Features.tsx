import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
	iconSrc: string;
	label: string;
}

const features: FeatureItem[] = [
	{ iconSrc: "/icons/housing.png", label: "Housing" },
	{ iconSrc: "/icons/declutter.png", label: "Declutter" },
	{ iconSrc: "/icons/roommate.png", label: "Roommate" },
	{ iconSrc: "/icons/services.png", label: "Services" },
	{ iconSrc: "/icons/gigs.png", label: "Gigs" },
	{ iconSrc: "/icons/share-care.png", label: "Share/Care" },
];

const Features: React.FC = () => {
	return (
		<section id="features" className="w-full max-w-3xl mx-auto px-4">
			<h2 className="text-2xl font-bold text-center text-orange-500 mb-6 mt-10">
				Features
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 gap-5 ml-20">
				{features.map((feature, index) => (
					<div
						key={index}
						className="w-[100px] flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
					>
						<div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-2">
							<Image
								src={feature.iconSrc}
								alt={feature.label}
								width={24}
								height={24}
								className="text-orange-500"
							/>
						</div>
						<span className="text-sm font-medium text-gray-700">
							{feature.label}
						</span>
					</div>
				))}
			</div>
			<div className="mt-10 flex justify-center items-center">
				<Link
					href="/get-started"
					className="bg-[#164CA4] text-white text-center items-center rounded-full font-dmsans font-semibold py-2 px-6 hover:bg-[#0E3A8B]"
				>
					Join Now
				</Link>
			</div>
		</section>
	);
};

export default Features;
