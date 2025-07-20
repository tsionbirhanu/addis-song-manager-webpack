import styled from "@emotion/styled"
import { forwardRef } from "react"
import React from "react"

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray[700]};
`

const StyledInput = styled.input`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[100]};
  }
  
  &:disabled {
    background: ${(props) => props.theme.colors.gray[100]};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[400]};
  }
  
  ${(props) =>
    props.error &&
    `
    border-color: ${props.theme.colors.error[500]};
    &:focus {
      border-color: ${props.theme.colors.error[500]};
      box-shadow: 0 0 0 3px ${props.theme.colors.error[100]};
    }
  `}
`

const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.error[500]};
`

const Input = forwardRef(({ label, error, id, required = false, ...props }, ref) => {
  return (
    <InputContainer>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span style={{ color: "red" }}> *</span>}
        </Label>
      )}
      <StyledInput id={id} error={error} ref={ref} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  )
})

Input.displayName = "Input"

export default Input
