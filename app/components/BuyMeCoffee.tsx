import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuyMeCoffee = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-20">
			<p className="font-dmsans md:max-w-[550px] max-w-[400px] font-light text-[#222222] text-center">
				Fueling Homebiro's growth, one cup at a time. Thank you for your
				support!
			</p>
			<div className="relative flex">
				<Image
					src="/icons/coffee.png"
					alt="Coffee icon"
					width={25}
					height={30}
					className="absolute left-[10px] top-1/2 transform -translate-y-1/2 ml-14 mt-1 text-center"
				/>

				<Link
					href="https://buymeacoffee.com/homebiro"
					target="__blank"
					className="md:px-[100px] px-[120px] py-3 font-gabriela text-[18px] bg-[#164CA4] text-white text-center rounded-md hover:bg-[#0E3A8B] mt-3"
				>
					Buy me a coffee
				</Link>
			</div>
		</div>
	);
};

export default BuyMeCoffee;
