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
import HomePage from "@/pages/main/home";
import AdminLayout from "../pages/admin/layout/AdmainLayouts";

const mainRoutes = {
	path: "/",
	element: <MainLayout />,
	children: [
		{
			index: true,
			id: "/",
			element: <HomePage />,
		},
		{
			path: "search",
			id: "search",
			lazy: async () => ({ Component: (await import("../pages/main/search")).default }),
		},
		{
			path: "contact",
			id: "contact",
			lazy: async () => ({ Component: (await import("../pages/main/contact")).default }),
		},
		{
			path: "about",
			id: "about",
			lazy: async () => ({ Component: (await import("../pages/main/about")).default }),
		},
		{
			path: "blogs",
			id: "blogs",
			lazy: async () => ({ Component: (await import("../pages/main/blogs")).default }),
		},
		{
			path: "blogs/:id",
			id: "blog",
			lazy: async () => ({ Component: (await import("../pages/main/blogs")).default }),
		},
		{
			path: "user",
			element: <UserLayout />,
			children: [
				{
					index: true,
					id: "user",
					lazy: async () => ({ Component: (await import("../pages/user/profile")).default }),
				},
				{
					path: "contact",
					id: "user/contact",
					lazy: async () => ({ Component: (await import("../pages/user/profile")).default }),
				},
				{
					path: "group",
					id: "user/group",
					lazy: async () => ({ Component: (await import("../pages/user/groupMember")).default }),
				},
				{
					path: "about",
					id: "user/about",
					lazy: async () => ({ Component: (await import("../pages/user/profile")).default }),
				},
				{
					path: "skills",
					id: "user/skills",
					lazy: async () => ({ Component: (await import("../pages/user/skills")).default }),
				},
				{
					path: "portfolio",
					id: "user/portfolio",
					lazy: async () => ({ Component: (await import("../pages/user/information")).default }),
				},
				{
					path: "information",
					id: "user/information",
					lazy: async () => ({ Component: (await import("../pages/user/information")).default }),
				},
				{
					path: "profile",
					id: "user/profile",
					lazy: async () => ({ Component: (await import("../pages/user/profile")).default }),
				},
				{
					path: "view",
					id: "user/view",
					lazy: async () => ({ Component: (await import("../pages/user/profile")).default }),
				},
			],

		},
	],
};


const adminRoutes = {
	path: "dashboard",
	element: <AdminLayout />,
	children: [
		{
			index: "true",
			id: "dashboard/tickets",
			lazy: async () => ({ Component: (await import("../pages/admin/dashboard/components/tickets")).default }),
		},
		{
			path: "reports",
			id: "dashboard/reports",
			lazy: async () => ({ Component: (await import("../pages/admin/dashboard/components/reports")).default }),
		},
		{
			path: "wallet",
			id: "dashboard/wallet",
			lazy: async () => ({ Component: (await import("../pages/admin/dashboard/components/wallet")).default }),
		},
	],
};

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
