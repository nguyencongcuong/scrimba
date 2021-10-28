import React from 'react'
import { Container, Break, Input, Button, Text } from "./styles/opt-form"

export default function OptForm({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return (
    <Input {...restProps} />
  )
}

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return (
    <Break {...restProps} />
  )
}


OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  )
}



OptForm.Text = function OptForm({ children, ...restProps }) {
  return (
    <Text {...restProps}>{children}</Text>
  )
}