import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(
	<Router>
		<Layout>
			<Router exact path="/" component={Featured}></Router>
			<Router path="/archives" component={Archives}></Router>
			<Router path="/settings" component={Settings}></Router>
		</Layout>
	</Router>
);
