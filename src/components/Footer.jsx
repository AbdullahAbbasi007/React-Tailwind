import React from "react";

const Footer = () => {
	return (
		<footer className="pt-16 bg-center bg-cover border-b border-black border-none bg-myImage ">
			<div className="container">
				<div>
					<div className="flex flex-col items-center">
						<div className="text-[#efefef] mt-[10px]  text-2xl font-medium ">
							Stay in Touch
						</div>
						<div className="w-[20%] bg-[#dedede] h-[1px] m-4 "></div>
					</div>
					<div className="pt-[20px] pb-[80px] flex justify-center">
						<form action="" className="w-[500px] flex items-center ">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Enter your email address"
								className="h-12 text-base border border-black border-none rounded-l text-[#4d565d] px-2 py-3 w-[75%] bg-white focus:outline-none focus:bg-[#e8f0fe] "
							/>
							<button
								className="className= w-[25%] h-[50px] px-2 py-4 transition-all duration-300 ease-in rounded-r
                                bg-[#FFFFFF47] text-white "
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
