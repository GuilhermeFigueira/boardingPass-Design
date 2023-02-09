import BottomTicket from "./components/BottomTicket";
import MiddleTicket from "./components/MiddleTicket";
import Ticket from "./components/Ticket";
import TopTicket from "./components/TopTicket";
import "./styles/main.css";

function App() {
	return (
		<div className="h-screen grid grid-rows-[15%_1fr_15%]  text-center m-auto w-max[]">
			<div className="flex flex-col justify-end text-white font-bold text-center text-2xl">
				Cartão de embarque
			</div>
			<div className="flex flex-col m-auto">
				<Ticket bottom>
					<TopTicket />
				</Ticket>
				<Ticket both>
					<MiddleTicket />
				</Ticket>
				<Ticket top>
					<BottomTicket />
				</Ticket>
			</div>
			<div className="px-5 text-lg text-neutral-900 w-full">
				<div className="w-80 m-auto font-thin">
					Qualquer problema procure o balcão de atendimento da sua
					companhia aérea
				</div>
			</div>
		</div>
	);
}

export default App;
