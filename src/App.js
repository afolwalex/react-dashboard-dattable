import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import AdminPath from "./AdminPath"

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/dashboard" component={AdminPath} />
					<Route path="/" component={Login} />
				</Switch>
			</Router>
		</>
	)
}

export default App
