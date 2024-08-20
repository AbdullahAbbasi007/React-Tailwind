import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Categories, Contact, Home } from "./pages";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Home />
				</>
			),
		},
		{
			path: "/categories",
			element: (
				<>
					<Categories />
				</>
			),
		},
		{
			path: "/about",
			element: (
				<>
					<About />
				</>
			),
		},
		{
			path: "/contact",
			element: (
				<>
					<Contact />
				</>
			),
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
