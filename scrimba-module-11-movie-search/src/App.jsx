import {Container, Typography} from "@mui/material";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
		<>
		<Container
			maxWidth={"lg"}
			style={{
				minHeight: "100vh",
				display: "flex",
				flexFlow: "column wrap",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				padding: "2rem",
			}}
		>
			<Typography
				variant={"h2"}
				component={"h1"}
				gutterBottom
			>
				Movie Search
			</Typography>
			<MovieSearch />
		</Container>
		</>
  );
}

export default App;
