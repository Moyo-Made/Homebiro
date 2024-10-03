import Image from "next/image";
import React from "react";

const Team = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-10 font-dmsans">
			<h2 className="text-2xl font-bold text-center text-orange-500 mb-6 mt-10">
				Meet Our Team
			</h2>

			<div className="flex flex-wrap md:gap-10 gap-7 md:w-full justify-center items-center">
				{/* Product Manager */}
				<div className="flex flex-col text-[20px] text-center">
					<Image
						src="/manager.png"
						alt="Product manager"
						width={200}
						height={200}
					/>
					<h2 className="font-medium mt-4">Abiola Ilesanmi</h2>
					<p className="font-light -mt-1">Product Manager</p>
				</div>

				{/* Design Lead */}
				<div className="flex flex-col text-[20px] text-center">
					<Image
						src="/designer.png"
						alt="Design Lead"
						width={200}
						height={200}
					/>
					<h2 className="font-medium mt-4">Akor Aaron</h2>
					<p className="font-light -mt-1">Design Lead</p>
				</div>

				{/* Developer */}
				<div className="flex flex-col text-[20px] text-center">
					<Image
						src="/developer.png"
						alt="Developer"
						width={200}
						height={200}
						className="bg-[#F6F6F9] rounded-2xl"
					/>
					<h2 className="font-medium mt-4">Moyomade Adegbite</h2>
					<p className="font-light -mt-1">Developer</p>
				</div>

				{/* Technical Writer */}
				<div className="flex flex-col text-[20px] text-center">
					<Image
						src="/writer.png"
						alt="Technical Writer"
						width={200}
						height={200}
					/>
					<h2 className="font-medium mt-4">Boluwatife Ogunniyi</h2>
					<p className="font-light -mt-1">Technical Writer</p>
				</div>

				{/* Brand Designer */}
				<div className="flex flex-col text-[20px] text-center">
					<Image
						src="/brand-designer.png"
						alt="Brand Designer"
						width={200}
						height={200}
					/>
					<h2 className="font-medium mt-4">Olagbegi Daniel</h2>
					<p className="font-light -mt-1">Brand Designer </p>
				</div>
			</div>
		</div>
	);
};

export default Team;
