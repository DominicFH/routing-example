import "./App.css";
import Title from "./components/Title";
import PlanetList from "./components/PlanetList";
import SinglePlanet from "./components/SinglePlanet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			{/* 
      Wrap our app component with BrowserRouter so we can make use of Links, Route and Routes
      */}
			<div className="App">
				<Title />
				<Routes>
					{/* 
          Routes component to wrap around any routes we may have in our app
          */}
					<Route path="/" element={<PlanetList />} />
					{/* 
          Use Route component so that when we're on the base url of our app,
          we render the PlanetList component
          */}
					<Route path="/planets/:planet_id" element={<SinglePlanet />} />
					{/* 
          Use Route component so that when our url ends with /planets/1 for example,
          we render the SinglePlanet component where we can extract planet_id with useParams
          */}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
