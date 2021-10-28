import React, {useEffect, useState} from 'react';
import { Header, Card, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

import Fuse from 'fuse.js'

import { getAuth, signOut } from "firebase/auth";

export function BrowseContainer({slides}) {
	const [category, setCategory] = useState('series');
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("")
	const [slideRows, setSlideRows] = useState([])
	
	const user = {
		displayName: "Karl",
		photoURL: "1"
	};
	
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	},[user])
	
	useEffect(() => {
		setSlideRows(slides[category])
	}, [slides, category])
	
	useEffect(() => {
		const options = {
			keys: [
				"data.title",
				"data.description",
				"data.genre"
			]
		}
		const fuse = new Fuse(slideRows, options);
		const results = fuse.search(searchTerm).map(({item}) => item)
		console.log(fuse.search(searchTerm))
		console.log(results)
		
		if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
			setSlideRows(results);
		} else {
			setSlideRows(slides[category])
		}
	},[searchTerm])
	
	return  profile.displayName ? (
			<>
				
				{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
				
				<Header src={"joker1"}>
					<Header.Frame>
						<Header.Group>
							<Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
							<Header.Link
								active={category === 'series' ? 'true' : 'false'}
								onClick={() => setCategory('series')}>
								Series
							</Header.Link>
							<Header.Link
								active={category === 'films' ? 'true' : 'false'}
								onClick={() => setCategory('films')}>
								Films
							</Header.Link>
						</Header.Group>
						
						<Header.Group>
							<Header.Search
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
							>
								Search
							</Header.Search>
							<Header.Profile>
								<Header.Picture src={user.photoURL} />
								<Header.Dropdown>
									
									<Header.Group>
										<Header.Picture src={user.photoURL} />
										<Header.Link>{user.displayName}</Header.Link>
									</Header.Group>
									
									<Header.Group>
										<Header.Link onClick={() => {
											// SIgn out with firebase
											const auth = getAuth()
											signOut(auth)
												.then(() => {
													console.log("Sign out successful")
												})
												.catch((error) => {
													console.log("An error happened: " + error)
												})
										}}>
											Sign out
										</Header.Link>
									</Header.Group>
									
								</Header.Dropdown>
							</Header.Profile>
						</Header.Group>
						
					</Header.Frame>
					
					<Header.Feature>
						<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
						<Header.Text>
							Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
							City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
							futile attempt to feel like he's part of the world around him.
						</Header.Text>
						<Header.PlayButton>Play</Header.PlayButton>
					</Header.Feature>
					
				</Header>
				
				<Card.Group>
					{
						slideRows.map((slideItem, index) => (
							<Card key={index}>
								<Card.Title>{slideItem.title}</Card.Title>
								<Card.Entities>
									{
										slideItem.data.map((item, index) => (
											<Card.Item key={index} item={item}>
												<Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
												<Card.Meta>
													<Card.SubTitle>{item.title}</Card.SubTitle>
													<Card.Text>{item.description}</Card.Text>
												</Card.Meta>
											</Card.Item>
										))
									}
								</Card.Entities>
								<Card.Feature category={category}>
									<Player>
										<Player.Button />
										<Player.Video />
									</Player>
								</Card.Feature>
							</Card>
						))
					}
				</Card.Group>
				
				<FooterContainer />
			</>)
		: (<SelectProfileContainer user={user} setProfile={setProfile} />);
}
