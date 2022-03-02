const axios = require("axios");

/*
Set config defaults when using axios https://axios-http.com/docs/config_defaults
Just sets the base url which we will use for all of our requests, just to make our
functions more readable :)
*/
const spaceApi = axios.create({
	baseURL: "https://space-facts.herokuapp.com/api",
});

/*
Contact the spaceApi using axios and GET request all planets
Used in PlanetList.jsx
*/
export const fetchPlanets = () => {
	return spaceApi.get("/planets").then((response) => {
		return response.data;
	});
};

/*
Contact the spaceApi using axios and GET request a single planet depending on the
planet_id passed into the function.
Used in SinglePlanet.jsx
*/
export const fetchPlanetById = (planet_id) => {
	return spaceApi.get(`/planets/${planet_id}`).then((response) => {
		return response.data;
	});
};
