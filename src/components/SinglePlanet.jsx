import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlanetById } from "../api";

const SinglePlanet = () => {
	/*
	useParams, lets us access the parametric endpoint included in the url.
	If we check the Route component in App.js we can see we have said this should be planet_id
	*/
	const { planet_id } = useParams();
	const [singlePlanet, setSinglePlanet] = useState({});
	/*
	isLoading created as state, lets us conditionally load the page if we have not received resources that we make use of
	If we didn't use isLoading then the page would be rendered before state is set as the function to set state is asynchronous, this can cause errors!
	*/
	const [isLoading, setIsLoading] = useState(true);

	/* 
	useEffect, when the component is first rendered, perform all the code within useEffect. 
	Empty dependency array needed to specify only on first render.
	Can put things which may change in the dependency array so that the code will be performed each time it changes (planet_id for example)
	But in our case, the useEffect is within a SinglePlanet component which will only be rendered when the planet_id changes so we don't need to account for this
	*/
	useEffect(() => {
		fetchPlanetById(planet_id).then(({ planet }) => {
			setSinglePlanet(planet);
			setIsLoading(false); // Set isLoading to false once we have received the planet data,
		});
	}, []);

	/*
	if isLoading is set to true then the component will only show the 'Loading...'
	When we set isLoading to false after we have received the planet data from the api then
	we render the rest of the code using this planet data
	*/
	if (isLoading) return <p>Loading...</p>;
	return (
		<div>
			<h3>{singlePlanet.planet_name}</h3>
			<p>type: {singlePlanet.type}</p>
			<p>distance from sun: {singlePlanet.au_from_sun} AU</p>
		</div>
	);
};

export default SinglePlanet;
