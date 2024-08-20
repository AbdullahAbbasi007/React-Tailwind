import React from "react";

const HomeContent = () => {
	return (
		<div>
			<header className="bg-cover">
				<div className="h-full ">
					<div className="container h-full">
						<div className="flex flex-col items-center justify-center h-full gap-4">
							<h1 className="text-5xl tracking-wider text-white">
								Let's do it together.
							</h1>
							<p className="hero-para">
								We travel the world in search of stories. Come along for the
								ride.
							</p>
							<button className="py-2.5 text-white transition-all duration-200 ease-in hover:bg-[#f17228] px-8 bg-[#dd783f] rounded text-wrap font-normal">
								View Latest Posts
							</button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export { HomeContent };
