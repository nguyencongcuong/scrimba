import {useEffect, useState} from "react"
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"

export default function useContent(target) {
	
	const [content, setContent] = useState([])
	
	async function readDatabase() {
		const fireStoreDB = getFirestore()
		const querySnapshot = await getDocs(collection(fireStoreDB, target));
		const result = []
		querySnapshot.forEach((doc) => {
			// console.log(`${doc.id} => ${doc.data()}`);
			result.push(doc.data())
		});
		setContent(result)
	}
	
	useEffect(() => {
	readDatabase()
	},[])
	
	return [content]
}
