import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className=" font-bold text-blue-400 text-center text-6xl">
				Hello world!
			</h1>
			<p className="text-blue-800 w-[80%]  m-auto mt-5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate
				aliquid a aperiam quod necessitatibus inventore illum hic porro nobis
				illo rerum sapiente unde magnam, doloribus eligendi, deserunt corporis
				ad!
			</p>
		</>
	);
}

export default App;
