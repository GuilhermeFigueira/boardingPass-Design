import Qrcode from "../../assets/qrcode.png";

export default function BottomTicket() {
	return (
		<>
			<div className="flex flex-row col w-full px-8 py-6 ">
				<div className="flex flex-col text-left gap-y-2 pt-4 w-1/2">
					<div>
						<h4>Embarque</h4>
						<p className="bg-cyan-500 text-white rounded-lg text-center w-fit px-2">
							16:15
						</p>
					</div>
					<div>
						<h4>Terminal</h4>
						<p>2</p>
					</div>
					<div>
						<h4>Portão</h4>
						<p>15</p>
					</div>
				</div>
				<div className="w-1/2 flex flex-col items-center">
					<img src={Qrcode} className="max-w-[160px] " />
					<h4>Grupo de embarque: 3</h4>
				</div>
			</div>
			<div className="pb-5">
				<strong>Atenção:</strong> o portão fecha 16:45
			</div>
		</>
	);
}
