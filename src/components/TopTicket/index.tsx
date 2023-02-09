import { AirplaneInFlight } from "phosphor-react";

export default function TopTicket() {
	return (
		<div className="flex flex-col px-8 py-6 gap-y-5">
			<div className="flex flex-row justify-between">
				<div className="text-left">
					<h4>Voo</h4>
					<p>RS995</p>
				</div>

				<div className="text-right">
					<h4>Data</h4>
					<p>23/05/2023</p>
				</div>
			</div>

			<div className="flex justify-between items-center gap-x-3">
				<div className="flex flex-col text-left">
					<h4>São Paulo, Brasil</h4>
					<h1>GRU</h1>
					<h3>17:00</h3>
				</div>

				<AirplaneInFlight size={32} color="black" weight="fill" />

				<div className="flex flex-col text-right">
					<h4>São Francisco, EUA</h4>
					<h1>SFO</h1>
					<h3 className="flex flex-row justify-end">
						04:48 <h5 className="text-xs">+1</h5>
					</h3>
				</div>
			</div>
		</div>
	);
}
