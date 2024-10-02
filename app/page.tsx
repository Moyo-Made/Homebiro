import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Waitlist from "./components/Waitlist";
import Team from "./components/Team";
import BuyMeCoffee from "./components/BuyMeCoffee";
import Footer from "./components/Footer";

const page = () => {
	return (
		<div>
			<Hero />
			<Features />
			<Waitlist />
			<Team />
			<BuyMeCoffee />
			<Footer />
		</div>
	);
};

export default page;
