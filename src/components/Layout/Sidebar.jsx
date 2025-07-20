"use client"

import styled from "@emotion/styled"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { Music, Plus, Home } from "lucide-react"
import { toggleSidebar } from "../../store/slices/uiSlice"
import React from "react"

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: white;
  border-right: 1px solid ${(props) => props.theme.colors.gray[200]};
  transform: translateX(${(props) => (props.open ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
  
  /* Mobile and Tablet */
  @media (max-width: 1023px) {
    box-shadow: ${(props) => props.theme.shadows.xl};
    width: 280px;
  }
  
  /* Very small mobile screens */
  @media (max-width: 480px) {
    width: 260px;
  }
`

const SidebarHeader = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};
  
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.md};
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary[600]};
  
  @media (max-width: 640px) {
    font-size: 1.125rem;
  }
`

const Navigation = styled.nav`
  padding: ${(props) => props.theme.spacing.lg};
  
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.md};
  }
`

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  color: ${(props) => props.theme.colors.gray[600]};
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background: ${(props) => props.theme.colors.gray[100]};
    color: ${(props) => props.theme.colors.gray[900]};
  }
  
  &.active {
    background: ${(props) => props.theme.colors.primary[100]};
    color: ${(props) => props.theme.colors.primary[700]};
  }
  
  /* Mobile */
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.sm};
    font-size: 0.875rem;
  }
`

const Sidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const handleNavClick = () => {

    if (window.innerWidth < 1024) {
      dispatch(toggleSidebar())
    }
  }

  return (
    <SidebarContainer open={sidebarOpen}>
      <SidebarHeader>
        <Logo>
          <Music size={24} />
          Addis Songs
        </Logo>
      </SidebarHeader>

      <Navigation>
        <NavItem to="/" end onClick={handleNavClick}>
          <Home size={18} />
          All Songs
        </NavItem>
        <NavItem to="/add" onClick={handleNavClick}>
          <Plus size={18} />
          Add Song
        </NavItem>
      </Navigation>
    </SidebarContainer>
  )
}

export default Sidebar
