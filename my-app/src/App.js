import React from "react";

function App() {
	const hi = <h1 className="foo">Hi!</h1>;
	const greeting = "Hi, Ken!";
	return (
		<div>
			<h1>{hi}World!</h1>
			<h1>{greeting}</h1>
			<label htmlFor="foo">Test</label>
			<input
				type="text"
				onClick={() => {
					console.log("Hello");
				}}
			/>
		</div>
	);
}

export default App;
