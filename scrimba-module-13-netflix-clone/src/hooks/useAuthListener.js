import {useState, useEffect} from "react";
import { getAuth } from "firebase/auth";

export default function useAuthListener() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))
	const auth = getAuth()
	useEffect(() => {
		const listener = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser)
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});
		
		return () => listener();
	},[])
	
	return {user}
}
