import { StatClientIcon, StatGrowthIcon, StatOrderIcon, StatRebondIcon } from "@/assets/icon/Icon";
import Container from "./Container";

const Stats = () => {
    return (
		<Container>
        <section className="md:mt-10 mt-40 p-6 my-6 text-black">
			<h4 className="text-center text-bold text-2xl mb-4"> Quelques chiffres</h4>
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-black">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gold">
				<StatOrderIcon />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">200</p>
				<p className="capitalize">Commandes</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-black">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gold">
				<StatClientIcon/>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">7500</p>
				<p className="capitalize">Nouveaux clients</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-black">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gold">
				<StatGrowthIcon/>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">172%</p>
				<p className="capitalize">Croissance</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-black">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gold">
				<StatRebondIcon/>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">17%</p>
				<p className="capitalize">Taux de rebond</p>
			</div>
		</div>
	</div>
</section>
</Container>
    );
};

export default Stats;