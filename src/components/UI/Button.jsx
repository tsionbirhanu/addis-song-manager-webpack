"use client"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react";

const StyledButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.xs};
  font-weight: 500;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Variants */
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background: ${props.theme.colors.primary[600]};
          color: white;
          &:hover:not(:disabled) {
            background: ${props.theme.colors.primary[700]};
          }
        `
      case "secondary":
        return `
          background: ${props.theme.colors.gray[200]};
          color: ${props.theme.colors.gray[900]};
          &:hover:not(:disabled) {
            background: ${props.theme.colors.gray[300]};
          }
        `
      case "danger":
        return `
          background: ${props.theme.colors.error[500]};
          color: white;
          &:hover:not(:disabled) {
            background: ${props.theme.colors.error[600]};
          }
        `
      case "outline":
        return `
          background: transparent;
          color: ${props.theme.colors.primary[600]};
          border: 1px solid ${props.theme.colors.primary[600]};
          &:hover:not(:disabled) {
            background: ${props.theme.colors.primary[50]};
          }
        `
      default:
        return `
          background: ${props.theme.colors.gray[100]};
          color: ${props.theme.colors.gray[700]};
          &:hover:not(:disabled) {
            background: ${props.theme.colors.gray[200]};
          }
        `
    }
  }}
  
  /* Sizes */
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: ${props.theme.spacing.xs} ${props.theme.spacing.sm};
          font-size: 0.875rem;
        `
      case "lg":
        return `
          padding: ${props.theme.spacing.md} ${props.theme.spacing.xl};
          font-size: 1.125rem;
        `
      default:
        return `
          padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
          font-size: 1rem;
        `
    }
  }}
`

const Button = ({
  children,
  variant = "default",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  )
}

export default Button
