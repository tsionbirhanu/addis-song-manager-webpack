"use client"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react";

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.xl};
`

const Spinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 3px solid ${(props) => props.theme.colors.gray[200]};
  border-top: 3px solid ${(props) => props.theme.colors.primary[500]};
  border-radius: 50%;
`

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </SpinnerContainer>
  )
}

export default LoadingSpinner
