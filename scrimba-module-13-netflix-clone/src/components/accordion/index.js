import React, {createContext, useContext, useState} from "react"
import {Container, Frame, Item, Inner, Title, Header, Body } from "./styles/accordion"
import {IoAdd, IoClose} from "react-icons/io5";

const AccordionContext = createContext()

export default function Accordion({children, ...restProps}) {
	return (
			<Container {...restProps}>
				<Inner>{children}</Inner>
			</Container>
	)
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
	return (
		<Frame {...restProps}>{children}</Frame>
	)
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
	const [toggleShow, setToggleShow] = useState(false)
	return (
		<AccordionContext.Provider value={{ toggleShow, setToggleShow}}>
			<Item {...restProps}>{children}</Item>
		</AccordionContext.Provider>
	)
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
	return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
	const {toggleShow, setToggleShow} = useContext(AccordionContext)
	return (
		<Header
			{...restProps}
			onClick={() => setToggleShow(!toggleShow)}
		>
			{children}
			{
				toggleShow ? <IoClose /> :
					<IoAdd />
			}
		</Header>
		)
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
	const {toggleShow} = useContext(AccordionContext)
	return (
		toggleShow ? <Body {...restProps}>{children}</Body> : null
	)
}
