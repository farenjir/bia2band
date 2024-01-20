import { Typography } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

import { Buttons } from "@/components";

const { Title } = Typography;

const ShopGrid = () => (
	<section id="shop-grid" className="mx-auto p-5 mt-8">
		<div className="flex justify-between align-bottom items-end">
			<div className="producer-title">
				<Title level={2}>برترین آهنگسازان</Title>
				<p className="my-3 text-slate-400">شما دراین بخش می توانید مورد علاقه خود را پیدا کنید</p>
			</div>
			<Buttons
				content={
					<div className="flex gap-2 align-middle items-center ">
						<span className="p-1"> مشاهده همه </span>
						<DoubleLeftOutlined />
					</div>
				}
				type="dashed"
				htmlType="button"
				size="default"
				classes="text-sm"
			/>
		</div>
		<section id="shop-cards" className="p-5 rounded-3xl shadow-2xl border border-gray-200">
			<div className="grid grid-rows-4 grid-flow-col gap-2 h-[400px]">
				<div className="row-span-2 col-span-2 h-full w-full rounded-2xl bg-slate-200"></div>
				<div className="row-span-2 col-span-1 h-full w-full rounded-2xl bg-purple-200"></div>
				<div className="row-span-2 col-span-1 h-full w-full rounded-2xl bg-purple-200"></div>
				<div className="row-span-4 col-span-3 h-full w-full rounded-2xl bg-blue-200"></div>
			</div>
		</section>
	</section>
);

export default ShopGrid;
