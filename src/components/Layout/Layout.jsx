"use client"

import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import NotificationContainer from "../UI/NotificationContainer"
import { useSelector } from "react-redux"
import React from "react"

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.gray[50]};
  position: relative;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.show ? "block" : "none")};
  
  @media (min-width: 1024px) {
    display: none;
  }
`

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  width: 100%;
  
  /* Desktop */
  @media (min-width: 1024px) {
    margin-left: ${(props) => (props.sidebarOpen ? "280px" : "0")};
  }
  
  /* Mobile and Tablet */
  @media (max-width: 1023px) {
    margin-left: 0;
    width: 100%;
  }
`

const ContentArea = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.spacing.lg};
  max-width: 100%;
  overflow-x: hidden;
  
  /* Mobile */
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.md};
  }
  
  /* Tablet */
  @media (min-width: 641px) and (max-width: 1023px) {
    padding: ${(props) => props.theme.spacing.lg};
  }
`

const Layout = ({ children }) => {
  const { sidebarOpen } = useSelector((state) => state.ui)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <LayoutContainer>
      <Sidebar />
      <Overlay show={sidebarOpen && isMobile} />
      <MainContent sidebarOpen={sidebarOpen}>
        <Header />
        <ContentArea>{children}</ContentArea>
      </MainContent>
      <NotificationContainer />
    </LayoutContainer>
  )
}

export default Layout
