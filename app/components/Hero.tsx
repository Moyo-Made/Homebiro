import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="bg-[#E68653] h-[500px] flex justify-between items-center">
			<div>
				<p className="text-white font-medium text-[40px] text-end font-shadows">
					...Increase{" "}
					<span className="text-[#164CA4]">Freedom</span> of{" "}
					<span className="text-[#164CA4]">Living</span>
				</p>

				<p className="text-white font-medium text-[40px] font-dmsans">Real Freedom... It&#39;s simple</p>
			</div>
			<Image src="/hero-image.png" alt="Hero Image" width={400} height={400} />
		</div>
	);
};

export default Hero;
