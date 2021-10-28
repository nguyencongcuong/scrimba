import React, { useState } from "react";
import {useHistory} from "react-router-dom";

import { Form } from "../components";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import * as ROUTES from "../constants/routes";

// Firebase Auth
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
	const history = useHistory()
	
	const [error, setError] = useState(false);
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const isInvalid = (password === "") | (emailAddress === "");

	const handleSignin = (event) => {
		event.preventDefault();

		// Firebase Auth
		const auth = getAuth()
		signInWithEmailAndPassword(auth, emailAddress, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				
				return user
			})
			.then((user) => {
				console.log(user)
				history.push(ROUTES.BROWSE)
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + ": " + errorMessage)
			})
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in</Form.Title>
					{error && <Form.Error>Error</Form.Error>}

					<Form.Base onSubmit={handleSignin}>
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) =>
								setEmailAddress(target.value)
							}
						/>
						<Form.Input
							type="password"
							value={password}
							placeholder="Passowrd"
							onChange={({ target }) =>
								setPassword(target.value)
							}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign In
						</Form.Submit>

						<Form.Text>
							New to Netflix {" "}
							<Form.Link to={ROUTES.SIGN_UP}>
								Signup now
							</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
