"use client"
import styled from "@emotion/styled"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import React from "react";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${(props) => props.theme.spacing.md};
`

const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.xl};
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};
`

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray[900]};
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.gray[100]};
  color: ${(props) => props.theme.colors.gray[500]};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${(props) => props.theme.colors.gray[200]};
    color: ${(props) => props.theme.colors.gray[700]};
  }
`

const ModalContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
`

const ModalFooter = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  justify-content: flex-end;
  padding: ${(props) => props.theme.spacing.lg};
  border-top: 1px solid ${(props) => props.theme.colors.gray[200]};
`

const Modal = ({ isOpen, onClose, title, children, footer, ...props }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} {...props}>
          <ModalContainer
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <CloseButton onClick={onClose}>
                <X size={16} />
              </CloseButton>
            </ModalHeader>

            <ModalContent>{children}</ModalContent>

            {footer && <ModalFooter>{footer}</ModalFooter>}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

export default Modal
