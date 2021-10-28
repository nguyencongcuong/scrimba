import {useState, useEffect, useRef} from "react"

function useFastTyping(time = 10) {
	
	const [text, setText] = useState("")
	const [wordCount, setWordCount] = useState(0)
	const [isStart, setIsStart] = useState(false)
	const [timeRemaining, setTimeRemaining] = useState(time)
	
	const textareaRef = useRef(null)
	
	function calculateWordCount(text) {
		const result = text.split(/\W/g).filter(e => e)
		return result.length
	}
	
	const handleChange = (event) => {
		if(timeRemaining > 0) {
			const {value} = event.target
			setText(value)
			setWordCount(calculateWordCount(value))
		}
	}
	
	const endGame = () => {
		setText("")
		setWordCount(0)
		setIsStart(false)
		setTimeRemaining(time)
	}
	
	const startGame = () => {
		if(!isStart) {
			setIsStart(true)
			textareaRef.current.focus()
		} else if (isStart && !timeRemaining) {
			endGame()
		}
	}
	
	useEffect(() => {
		if(isStart) {
			const timer = setTimeout(() => {
				setTimeRemaining(timeRemaining - 1)
			}, 1000)
			timeRemaining === 0 && clearTimeout(timer)
		}
	}, [timeRemaining, isStart])
	
	return {text, wordCount, timeRemaining, isStart, textareaRef, handleChange, startGame}
}

export {useFastTyping}
