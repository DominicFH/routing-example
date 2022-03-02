import { Link } from "react-router-dom";

export default function PlanetCard({ planet_id, planetName, type, auFromSun }) {
	return (
		<article>
			{/*
			For each PlanetCard rendered, have the planetName act as a Link by wrapping its element with the Link component.
			Link uses the to= attribute to specify how the end of the route will change when it is clicked
			*/}
			<Link to={`/planets/${planet_id}`}>
				<h3>{planetName}</h3>
			</Link>
			<p>type: {type}</p>
			<p>distance from sun: {auFromSun} AU</p>
		</article>
	);
}
