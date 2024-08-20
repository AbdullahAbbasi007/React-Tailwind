import React from "react";
import { Footer, Navbar } from "../components";
const MianLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export { MianLayout };
