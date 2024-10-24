import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroLogo from "../../public/hero-image.png";

const Hero = () => {
	return (
		<section id="home" className="bg-[#E68653] md:h-[500px] h-[545px]">
			<div className="flex md:flex-row flex-col md:justify-around  items-center md:mt-0 mt-20">
				<div className="md:w-[600px] w-[500px] md:mt-0 mt-10">
					<p className="text-white font-medium md:text-[35px] text-[26px] font-dmsans text-center md:text-end">
						...Increase <span className="text-[#164CA4]">Freedom</span> of{" "}
						<span className="text-[#164CA4]">Living</span>
					</p>

					<p className="text-white font-medium md:text-[60px] text-[40px] font-shadows text-center md:text-end">
						Real Freedom... It&#39;s simple
					</p>
				</div>
				<Image
					src={HeroLogo}
					alt="Hero Image"
					width={500}
					height={400}
					className="w-[400px] h-[300px] md:w-[500px] md:h-[400px] md:ml-0 ml-16 md:mt-14"
				/>
			</div>
			<div className="relative md:w-[400px] w-[350px] h-[60px] rounded-full bg-[#fff] md:ml-28 ml-5 md:-mt-10 mt-5 flex md:justify-start justify-center items-center">
				<input
					type="text"
					placeholder="Enter your email"
					className="w-full h-full rounded-full bg-transparent text-start pl-7 focus:outline-none placeholder:font-dmsans placeholder:font-extralight"
				/>
				<Link
					href="/get-started"
					className="absolute right-[10px] top-1/2 transform -translate-y-1/2 md:w-[130px] w-[120px] h-[40px] bg-[#164CA4] text-white text-center items-center rounded-full font-dmsans font-semibold py-2 hover:bg-[#0E3A8B]"
				>
					Get Started
				</Link>
			</div>
		</section>
	);
};

export default Hero;
