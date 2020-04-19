import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

// import Navigation from "./components/navigation/navigation.component";
import Navbar from "./components/navbar/navbar.component";
import Store from "./pages/store/store.component";

const App = () => {
	return (
		<>
			<Navbar />
			{/* <Navigation /> */}
			<Switch>
				<Route exact path="/" component={Store} />
			</Switch>
		</>
	);
};

export default App;
