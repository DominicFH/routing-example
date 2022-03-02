import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import * as api from "../api";

export default function PlanetList() {
	const [planets, setPlanets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	/* 
	useEffect, when the component is first rendered, perform all the code within useEffect. 
	Empty dependency array needed to specify only on first render.
	*/
	useEffect(() => {
		setIsLoading(true);
		// Invoke our function from api.js and use the response to set the planets state.
		api.fetchPlanets().then((response) => {
			setPlanets(response.planets);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) return <p>loading..</p>;
	return (
		<section>
			{planets.map(({ planet_id, planet_name, type, au_from_sun }) => {
				return (
					<PlanetCard
						key={planet_id}
						planet_id={planet_id}
						planetName={planet_name}
						type={type}
						auFromSun={au_from_sun}
					/>
				);
			})}
		</section>
	);
}
