import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import { userSelector } from "@/store/selector";

import logo from "/assets/icon/vite.svg";
import LogoSection from "./components/Logo";
import NavbarMobileMenu from "./components/MobileMenu";

const { Paragraph } = Typography;

const MainNavbar = ({ onCloseDrawer, token }) => {
	const user = useSelector(userSelector);
	// links
	const links = [
		{ to: "/", title: "صفحه نخست" },
		{ to: "/user", title: "هم بندی ها" },
		{ to: "/blogs", title: "بلاگ" },
		{ to: "/about", title: "درباره ما" },
		{ to: "/contact", title: "تماس با ما" },
	];
	// return
	const linkClass = `pt-5 hover:text-[${token?.colorPrimary}]`;
	return (
		<div className="relative flex h-12 items-center justify-between">
			{/* NavbarMobileMenu */}
			<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<NavbarMobileMenu user={user} />
			</div>
			{/* MenuSection */}
			<div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
				<div className="hidden sm:mx-5 sm:block">
					<div className="flex space-x-7">
						<img src={logo} alt="logo" className="pl-10" />
						{links.map(({ title, ...linkOptions }) => (
							<NavLink key={title} {...linkOptions}>
								<Paragraph className={linkClass}>{title}</Paragraph>
							</NavLink>
						))}
					</div>
				</div>
			</div>
			{/* LogoSection */}
			<div className="flex">
				<LogoSection user={user} linkClass={linkClass} />
				<SettingOutlined
					className={`text-[${token?.colorPrimary}] text-xl pt-1`}
					onClick={() => onCloseDrawer("navAction")}
				/>
				<div className="hidden hover:text-[#1677ff] text-[#1677ff]" />
				<div className="hidden hover:text-[#1c4e80] text-[#1c4e80]" />
				<div className="hidden hover:text-[#1dc362] text-[#1dc362]" />
				<div className="hidden hover:text-[#d32d41] text-[#d32d41]" />
				<div className="hidden hover:text-[#1c4e80] text-[#1c4e80]" />
			</div>
		</div>
	);
};

export default MainNavbar;
