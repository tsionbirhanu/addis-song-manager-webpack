"use client"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react";

const StyledCard = styled(motion.div)`
  background: white;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.sm};
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
    border-color: ${(props) => props.theme.colors.gray[300]};
  }
`

const CardHeader = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};
`

const CardContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
`

const CardFooter = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-top: 1px solid ${(props) => props.theme.colors.gray[200]};
  background: ${(props) => props.theme.colors.gray[50]};
`

const Card = ({ children, header, footer, ...props }) => {
  return (
    <StyledCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  )
}

export default Card
