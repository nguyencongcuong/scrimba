import {Route, Switch} from "react-router-dom";
import Photos from "./pages/Photos";
import Header from "./components/Header";
import Cart from "./pages/Cart";

function App() {
	return (
		<>
			<Header/>
			<Switch>
				<Route exact path={"/"}>
					<Photos/>
				</Route>
				<Route exact path={"/cart"}>
					<Cart />
				</Route>
			</Switch>
		</>
	);
}

export default App;
