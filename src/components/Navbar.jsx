import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="py-4 bg-black ">
			<div className="container">
				<div className="flex items-center justify-between ">
					<div className="">
						<NavLink to="/">
							<div className="text-2xl text-white">Escape.</div>
						</NavLink>
					</div>
					<ul>
						<NavLink
							to="/"
							className="  px-[10px] py-[20px]  transition-opacity duration-200 ease  text-xs font-light uppercase  text-white "
						>
							Home
						</NavLink>
						<NavLink
							to="/categories"
							className="px-[10px] py-[20px]  transition-opacity ease duration-200 text-xs font-light uppercase text-white"
						>
							Categories
						</NavLink>
						<NavLink
							to="/about"
							className="px-[10px] py-[20px]  transition-opacity ease duration-200 text-xs font-light uppercase text-white"
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className="px-[10px] py-[20px]  transition-opacity ease duration-200 text-xs font-light uppercase text-white"
						>
							Contact
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export { Navbar };
