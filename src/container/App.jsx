import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import store from "../store/store";
import i18n from "../langs/i18n";

import ContextApi from "@/context/ContextApi";
// layout
import { Loadings } from "@/components";
import MainLayout from "@/layout/MainLayouts";
import UserLayout from "@/layout/UserLayout";
// pages
import HomePage from "@/pages/home";

const mainRoutes = {
	path: "/",
	element: <MainLayout />,
	children: [
		{
			index: true,
			id: "home",
			element: <HomePage />,
		},
		{
			path: "search",
			id: "search",
			lazy: async () => ({ Component: (await import("../pages/search")).default }),
		},
		{
			path: "contact",
			id: "contact",
			lazy: async () => ({ Component: (await import("../pages/contact")).default }),
		},
		{
			path: "about",
			id: "about",
			lazy: async () => ({ Component: (await import("../pages/about")).default }),
		},
		{
			path: "user",
			id: "user",
			element: <UserLayout />,
			children: [
				{
					index: true,
					id: "profile",
					lazy: async () => ({ Component: (await import("../pages/user/profile")).default }),
				},
				{
					path: "skills",
					id: "skills",
					lazy: async () => ({ Component: (await import("../pages/user/profile")).default }),
				},
			],
		},
	],
};

const adminRoutes = {};

const router = createBrowserRouter([mainRoutes, adminRoutes]);

function App() {
	// return
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<ContextApi>
					<RouterProvider router={router} fallbackElement={<Loadings />} />
				</ContextApi>
			</I18nextProvider>
		</Provider>
	);
}

export default App;
