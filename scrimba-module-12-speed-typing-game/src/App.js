import React from "react"
import {useFastTyping} from "./custom-hooks/useFastTyping"

function App() {
	
	const {
		text,
		wordCount,
		timeRemaining,
		isStart,
		textareaRef,
		handleChange,
		startGame} = useFastTyping(20)
	
	return (
		<div className={"h-screen flex flex-col justify-center items-center bg-gray-50"}>
			<h1>Speed Typing Game</h1>
			<textarea
				rows={10}
				className={`w-96`}
				value={isStart ? text : ""}
				onChange={handleChange}
				ref={textareaRef}
			/>
			<h4>Time remaining: {`${timeRemaining}`}</h4>
			<button
				className={`bg-gray-100 p-2`}
				onClick={startGame}
			>
				{isStart ? (timeRemaining ? "Typing" : "Let's try again") : "Start game"}
			</button>
			<h5>
				{`Word count: ${(isStart && timeRemaining === 0) ? wordCount : ""}`}
			</h5>
		</div>
	);
}

export default App;
