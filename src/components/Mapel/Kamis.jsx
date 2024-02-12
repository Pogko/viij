const Kamis = () => {
	return (
		<>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Bahasa Indonesia</div>
				<div className="flex justify-center items-center text-sm">07.45-09.45</div>
			</div>
			<div
				className=" flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Bahasa Sunda</div>
				<div className="flex justify-center items-center text-sm">09.45-10.25</div>
			</div>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="700">
				<div className="w-[50%] text-base  font-medium">Istirahat</div>
				<div className="flex justify-center items-center text-sm">10.25-10.55</div>
			</div>
			<div
				className=" border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="800">
				<div className="w-[50%] text-base  font-medium">Bahasa Sunda</div>
				<div className="flex justify-center items-center text-sm">10.55-11.35</div>
			</div>
			<div
				className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="1000">
				<div className="w-[50%] text-base font-medium">IPS</div>
				<div className="flex justify-center items-center text-sm">11.35-12.15</div>
			</div>

			{/* Additional Schedule */}
			<div
				className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="1200">
				<div className="w-[50%] text-base  font-medium">Istirahat/Sholat Dzuhur</div>
				<div className="flex justify-center items-center text-sm">12.15-12.50</div>
			</div>
			<div
				className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="1400">
				<div className="w-[50%] text-base  font-medium">IPS</div>
				<div className="flex justify-center items-center text-sm">12.50-13.30</div>
			</div>
			<div
				className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="1600">
				<div className="w-[50%] text-base  font-medium">Bahasa Inggris</div>
				<div className="flex justify-center items-center text-sm">13.30-14.50</div>
			</div>
		</>
	)
}

export default Kamis