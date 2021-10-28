import React, {useContext} from "react"
import {Context} from "../Context";
import Image from "../components/Image";
import {getClass} from "../utils"

function Photos() {
	
	const {photos} = useContext(Context)
	
	return (
		<main className={"photos"}>
			{
				photos.map((photo, index) =>
					<Image
						key={index}
						img={photo}
						className={getClass(index)}
					/>
				)
			}
		</main>
	)
}

export default Photos
