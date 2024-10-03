import Image from "next/image";
import Link from "next/link";
import React from "react";

const Waitlist = () => {
	return (
		<div className="flex flex-col justify-center items-center font-dmsans mt-16">
			<div>
				<h1 className="text-orange-500 md:text-3xl text-2xl font-bold text-center w-[700px]">
					Join the waitlist for{" "}
					<span className="text-[#164CA4] ">Homebiro</span>
				</h1>
				<p className="md:max-w-[630px] max-w-[400px] text-[#222222] font-light text-center">
					Be the first to know when we launch. Get exclusive updates, early
					access, and more.
				</p>
			</div>

			{/* Full Name */}
			<div className="relative flex gap-3 mt-6">
				<Image
					className="absolute left-[10px] top-1/2 transform -translate-y-1/2 ml-2"
					src="/icons/user.svg"
					alt="User icon"
					width={20}
					height={20}
				/>
				<input
					type="text"
					placeholder="Enter full name"
					className="md:w-[500px] w-[400px] h-[50px] border border-[#164CA4] rounded-md pl-14 focus:outline-[#31558fd2] placeholder:text-[#222222] placeholder:font-light"
					required
				/>
			</div>

			{/* Email Address */}
			<div className="relative flex gap-3 mt-5">
				<Image
					className="absolute left-[10px] top-1/2 transform -translate-y-1/2 ml-2"
					src="/icons/email.svg"
					alt="User icon"
					width={20}
					height={20}
				/>
				<input
					type="email"
					placeholder="Enter email address"
					className="md:w-[500px] w-[400px] h-[50px] border border-[#164CA4] rounded-md pl-14 focus:outline-[#31558fd2] placeholder:text-[#222222] placeholder:font-light"
					required
				/>
			</div>

			<div className="mt-10">
				<Link
					href="/join-now"
					className="md:px-[215px] px-[170px] py-3 bg-[#164CA4] text-white text-center rounded-md hover:bg-[#0E3A8B]"
				>
					Join Now
				</Link>
			</div>
		</div>
	);
};

export default Waitlist;
