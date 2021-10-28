import {
	Box,
	Button,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	TextField,
	Typography
} from "@mui/material";
import {useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {StarTwoTone} from "@mui/icons-material";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MovieSearch() {
	
	const [query, setQuery] = useState("")
	const [movies, setMovies] = useState([])
	
	const theme = useTheme();
	const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));
	const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
	
	// FUNCTIONS
	const searchMovies = async (e) => {
		e.preventDefault()
		if (query) {
			const url = `https://api.themoviedb.org/3/search/movie?api_key=5be84dfa5a5d692c05e4c8a21f1b1bdb&query=${query}`
			try {
				const res = await fetch(url)
				const data = await res.json()
				console.log(data.results)
				setMovies(data.results)
			} catch (err) {
				console.log(err)
			}
		}
	}
	
	// COMPONENTS
	function MovieInfoItem({content}) {
		return (
			<ListItem style={{
				display: "flex",
				padding: "0",
			}}>
				<ListItemIcon style={{minWidth: "30px"}} children={<StarTwoTone/>}/>
				<ListItemText children={content}/>
			</ListItem>
		)
	}
	
	function MovieCard({poster, title, overview, releaseDate, voteAverage}) {
		return (
			<ImageListItem>
				<img
					src={`https://image.tmdb.org/t/p/original/${poster}`}
					alt={title}
					loading="lazy"
				/>
				<Paper
					style={{
						backgroundColor: "#FDFDFD",
						padding: "2rem",
						textAlign: "left",
					}}
				>
					<Typography
						variant="h5"
						component="h2"
						mb={2}
						children={title}
					/>
					<Typography
						component={"p"}
						children={overview}
					/>
					<List>
						<MovieInfoItem content={`Release: ${releaseDate}`}/>
						<MovieInfoItem content={`Voted: ${voteAverage}`}/>
					</List>
				</Paper>
			</ImageListItem>
		)
	}
	
	function SearchedList() {
		return (
			<Box>
				<ImageList variant="masonry" cols={matchesLg ? 3 : matchesMd ? 2 : 1} gap={50}>
					
					{movies.filter(movie => movie.poster_path).map((movie, index) => (
						<MovieCard
							key={index}
							poster={movie.poster_path}
							title={movie.original_title}
							overview={movie.overview}
							releaseDate={movie.release_date}
							voteAverage={movie.vote_average}
						/>
					))}
				
				</ImageList>
			</Box>
		)
	}
	
	return (
		<>
			<Grid
				container
				component={"form"}
				spacing={2}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Grid item xs={12}>
					<TextField
						variant={"standard"}
						color={"info"}
						fullWidth
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder={"i.e Jurassic Park"}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						fullWidth
						size={"medium"}
						color={"secondary"}
						variant={"outlined"}
						type={"submit"}
						onClick={searchMovies}
					>
						Search
					</Button>
				</Grid>
				<Grid item xs={12}>
					<SearchedList/>
				</Grid>
			</Grid>
		</>
	)
}
