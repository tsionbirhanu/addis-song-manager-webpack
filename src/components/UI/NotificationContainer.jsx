"use client"

import { useEffect } from "react"
import styled from "@emotion/styled"
import { useSelector, useDispatch } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react"
import { removeNotification } from "../../store/slices/uiSlice"
import React from "react";

const Container = styled.div`
  position: fixed;
  top: ${(props) => props.theme.spacing.lg};
  right: ${(props) => props.theme.spacing.lg};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
`

const NotificationCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.md};
  background: white;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border-left: 4px solid;
  min-width: 300px;
  max-width: 400px;
  
  ${(props) => {
    switch (props.type) {
      case "success":
        return `border-left-color: ${props.theme.colors.success[500]};`
      case "error":
        return `border-left-color: ${props.theme.colors.error[500]};`
      case "warning":
        return `border-left-color: ${props.theme.colors.warning[500]};`
      default:
        return `border-left-color: ${props.theme.colors.primary[500]};`
    }
  }}
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  ${(props) => {
    switch (props.type) {
      case "success":
        return `color: ${props.theme.colors.success[500]};`
      case "error":
        return `color: ${props.theme.colors.error[500]};`
      case "warning":
        return `color: ${props.theme.colors.warning[500]};`
      default:
        return `color: ${props.theme.colors.primary[500]};`
    }
  }}
`

const Message = styled.div`
  flex: 1;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[700]};
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.gray[400]};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${(props) => props.theme.colors.gray[600]};
  }
`

const getIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircle size={20} />
    case "error":
      return <AlertCircle size={20} />
    case "warning":
      return <AlertTriangle size={20} />
    default:
      return <AlertCircle size={20} />
  }
}

const NotificationContainer = () => {
  const { notifications } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  useEffect(() => {
    notifications.forEach((notification) => {
      if (notification.autoClose !== false) {
        const timer = setTimeout(() => {
          dispatch(removeNotification(notification.id))
        }, 5000)

        return () => clearTimeout(timer)
      }
    })
  }, [notifications, dispatch])

  const handleClose = (id) => {
    dispatch(removeNotification(id))
  }

  return (
    <Container>
      <AnimatePresence>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            type={notification.type}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <IconContainer type={notification.type}>{getIcon(notification.type)}</IconContainer>
            <Message>{notification.message}</Message>
            <CloseButton onClick={() => handleClose(notification.id)}>
              <X size={16} />
            </CloseButton>
          </NotificationCard>
        ))}
      </AnimatePresence>
    </Container>
  )
}

export default NotificationContainer
