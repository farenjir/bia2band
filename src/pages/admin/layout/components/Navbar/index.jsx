import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "antd";

import { userSelector } from "@/store/selector";

import logo from "/assets/icon/Bia2band1.svg";
import NavbarMobileMenu, { links } from "./components/MobileMenu";

const { Paragraph } = Typography;

const MainNavbar = ({ onCloseDrawer, token }) => {
	const user = useSelector(userSelector);
	// return
	const linkClass = `pt-5 hover:text-[${token?.colorPrimary}]`;
	return (
		<div className="relative flex h-12 items-center justify-between">
			{/* NavbarMobileMenu */}
			<div className="mt-3 sm:hidden">
				<NavbarMobileMenu user={user} />
			</div>
			{/* MenuSection */}
			<div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
				<div className="hidden sm:mx-5 sm:block">
					<div className="flex space-x-7">
						<img src={logo} alt="logo" className="pl-10" />
						{links.map(({ title, to }) => (
							<NavLink key={title} to={to}>
								<Paragraph className={linkClass}>{title}</Paragraph>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainNavbar;
